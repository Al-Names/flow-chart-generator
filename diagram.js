function init() {
  var $ = go.GraphObject.make;

  myDiagram = $(go.Diagram, "myDiagramDiv", {
    initialContentAlignment: go.Spot.Center,
    allowDrop: true,
    LinkDrawn: showLinkLabel,
    LinkRelinked: showLinkLabel,
    scrollsPageOnFocus: false,
    "undoManager.isEnabled": true
  });

  myDiagram.addDiagramListener("Modified", function(e) {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
    var idx = document.title.indexOf("*");
    if (myDiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.substr(0, idx);
    }
  });

  function nodeStyle() {
    return [
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      {
        locationSpot: go.Spot.Center
      }
    ];
  }

  function makePort(name, align, spot, output, input) {
    var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);

    return $(go.Shape, {
      fill: "transparent",
      strokeWidth: 0,
      width: horizontal ? NaN : 8,
      height: !horizontal ? NaN : 8,
      alignment: align,
      stretch: horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical,
      portId: name,
      fromSpot: spot,
      fromLinkable: output,
      toSpot: spot,
      toLinkable: input,
      cursor: "pointer",
      mouseEnter: function(e, port) {
        if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
      },
      mouseLeave: function(e, port) {
        port.fill = "transparent";
      }
    });
  }

  function textStyle() {
    return {
      font: "bold 11pt Helvetica, Arial, sans-serif",
      stroke: "whitesmoke"
    };
  }

  myDiagram.nodeTemplateMap.add(
    "",
    $(
      go.Node,
      "Table",
      nodeStyle(),

      $(
        go.Panel,
        "Auto",
        $(
          go.Shape,
          "Rectangle",
          { fill: "#00A9C9", strokeWidth: 0 },
          new go.Binding("figure", "figure")
        ),
        $(
          go.TextBlock,
          textStyle(),
          {
            margin: 8,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true
          },
          new go.Binding("text").makeTwoWay()
        )
      ),

      makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
      makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
      makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
      makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
  );

  myDiagram.nodeTemplateMap.add(
    "Conditional",
    $(
      go.Node,
      "Table",
      nodeStyle(),

      $(
        go.Panel,
        "Auto",
        $(
          go.Shape,
          "Diamond",
          { fill: "#00A9C9", strokeWidth: 0 },
          new go.Binding("figure", "figure")
        ),
        $(
          go.TextBlock,
          textStyle(),
          {
            margin: 8,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true
          },
          new go.Binding("text").makeTwoWay()
        )
      ),

      makePort("T", go.Spot.Top, go.Spot.Top, false, true),
      makePort("L", go.Spot.Left, go.Spot.Left, true, true),
      makePort("R", go.Spot.Right, go.Spot.Right, true, true),
      makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
  );

  myDiagram.nodeTemplateMap.add(
    "Start",
    $(
      go.Node,
      "Table",
      nodeStyle(),
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Circle", {
          minSize: new go.Size(40, 40),
          fill: "#79C900",
          strokeWidth: 0
        }),
        $(go.TextBlock, "Start", textStyle(), new go.Binding("text"))
      ),

      makePort("L", go.Spot.Left, go.Spot.Left, true, false),
      makePort("R", go.Spot.Right, go.Spot.Right, true, false),
      makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
    )
  );

  myDiagram.nodeTemplateMap.add(
    "End",
    $(
      go.Node,
      "Table",
      nodeStyle(),
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Circle", {
          minSize: new go.Size(40, 40),
          fill: "#DC3C00",
          strokeWidth: 0
        }),
        $(go.TextBlock, "End", textStyle(), new go.Binding("text"))
      ),

      makePort("T", go.Spot.Top, go.Spot.Top, false, true),
      makePort("L", go.Spot.Left, go.Spot.Left, false, true),
      makePort("R", go.Spot.Right, go.Spot.Right, false, true)
    )
  );

  myDiagram.nodeTemplateMap.add(
    "Comment",
    $(
      go.Node,
      "Auto",
      nodeStyle(),
      $(go.Shape, "File", { fill: "#EFFAB4", strokeWidth: 0 }),
      $(
        go.TextBlock,
        textStyle(),
        {
          margin: 5,
          maxSize: new go.Size(200, NaN),
          wrap: go.TextBlock.WrapFit,
          textAlign: "center",
          editable: true,
          font: "bold 12pt Helvetica, Arial, sans-serif",
          stroke: "#454545"
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );

  myDiagram.linkTemplate = $(
    go.Link,
    {
      routing: go.Link.AvoidsNodes,
      curve: go.Link.JumpOver,
      corner: 5,
      toShortLength: 4,
      relinkableFrom: true,
      relinkableTo: true,
      reshapable: true,
      resegmentable: true,

      mouseEnter: function(e, link) {
        link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)";
      },
      mouseLeave: function(e, link) {
        link.findObject("HIGHLIGHT").stroke = "transparent";
      },
      selectionAdorned: false
    },
    new go.Binding("points").makeTwoWay(),
    $(go.Shape, {
      isPanelMain: true,
      strokeWidth: 8,
      stroke: "transparent",
      name: "HIGHLIGHT"
    }),
    $(
      go.Shape,
      { isPanelMain: true, stroke: "gray", strokeWidth: 2 },
      new go.Binding("stroke", "isSelected", function(sel) {
        return sel ? "dodgerblue" : "gray";
      }).ofObject()
    ),
    $(go.Shape, { toArrow: "standard", strokeWidth: 0, fill: "gray" }),
    $(
      go.Panel,
      "Auto",
      {
        visible: false,
        name: "LABEL",
        segmentIndex: 2,
        segmentFraction: 0.5
      },
      new go.Binding("visible", "visible").makeTwoWay(),
      $(go.Shape, "RoundedRectangle", {
        fill: "#F8F8F8",
        strokeWidth: 0
      }),
      $(
        go.TextBlock,
        "Yes",
        {
          textAlign: "center",
          font: "10pt helvetica, arial, sans-serif",
          stroke: "#333333",
          editable: true
        },
        new go.Binding("text").makeTwoWay()
      )
    )
  );

  function showLinkLabel(e) {
    var label = e.subject.findObject("LABEL");
    if (label !== null)
      label.visible = e.subject.fromNode.data.category === "Conditional";
  }

  myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
  myDiagram.toolManager.relinkingTool.temporaryLink.routing =
    go.Link.Orthogonal;

  load();

  myPalette = $(go.Palette, "myPaletteDiv", {
    scrollsPageOnFocus: false,
    nodeTemplateMap: myDiagram.nodeTemplateMap,
    model: new go.GraphLinksModel([
      { category: "Start", text: "Start" },
      { text: "Step" },
      { category: "Conditional", text: "???" },
      { category: "End", text: "End" },
      { category: "Comment", text: "Comment" }
    ])
  });
}

function save() {
  document.getElementById("mySavedModel").value = myDiagram.model.toJson();
  myDiagram.isModified = false;
}
function load() {
  myDiagram.model = go.Model.fromJson(
    document.getElementById("mySavedModel").value
  );
}

function printDiagram() {
  var svgWindow = window.open();
  if (!svgWindow) return;
  var printSize = new go.Size(700, 960);
  var bnds = myDiagram.documentBounds;
  var x = bnds.x;
  var y = bnds.y;
  while (y < bnds.bottom) {
    while (x < bnds.right) {
      var svg = myDiagram.makeSVG({
        scale: 1.0,
        position: new go.Point(x, y),
        size: printSize
      });
      svgWindow.document.body.appendChild(svg);
      x += printSize.width;
    }
    x = bnds.x;
    y += printSize.height;
  }
  setTimeout(function() {
    svgWindow.print();
  }, 1);
}
