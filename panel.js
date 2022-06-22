diagram = (function() {
     var $ = go.GraphObject.make;
     var diagram;
   
     var getTemplates = function() {
       return [
         {
           category: "Bulb",
           template: $(
             go.Node,
             "Auto",
             $(go.Shape, "Circle", {
               width: 60,
               height: 60,
               fill: "yellow"
             }),
             $(go.TextBlock, new go.Binding("text", "category"))
           )
         },

         {
           category: "AC",
           template: $(
             go.Node,
             "Spot",
                    $(go.Shape, {
                         geometryString: "F M0 0 L100 0 Q150 50 100 100 L0 100 Q50 50 0 0z",
                         fill: "cyan",
                         alignment: go.Spot.Center,
                         width: 60,
                         height: 60
                    }),
                    $(go.TextBlock, new go.Binding("text", "category"))
           )
         },

         {
           category: "Wifi",
           template: $(
             go.Node,
             "Spot",
               $(go.Shape, "Rectangle", {
                    width: 100,
                    height: 50,
                    fill: "lime"
               }),
               $(go.TextBlock, new go.Binding("text", "category"))
           )
         }
       ];
     };
   
     var initDiagram = function() {
       diagram = $(go.Diagram, "diagram-content", {
         initialContentAlignment: go.Spot.Center,
         allowDrop: true,
         layout: $(go.ForceDirectedLayout)
       });
       getTemplates().forEach(x =>
         diagram.nodeTemplateMap.add(x.category, x.template)
       );
       diagram.model = $(go.GraphLinksModel, {
         nodeDataArray: [
           {
             key: 1,
             category: "Bulb"
           },
           {
             key: 2,
             category: "AC"
           },
           {
             key: 3,
             category: "Wifi"
           },
           {
             key: 4,
             category: "Bulb"
           }
         ],
     
       });
       diagram.grid.visible = true;
       diagram.toolManager.draggingTool.isGridSnapEnabled = true;
       diagram.toolManager.draggingTool.gridSnapCellSize = new go.Size(50, 50);
     };
   
     var initPalette = function() {
       palette = $(go.Palette, "palette-content");
       getTemplates().forEach(x =>
         palette.nodeTemplateMap.add(x.category, x.template)
       );
       palette.model.nodeDataArray = [
         {
           key: 1,
           category: "Bulb"
         },
         {
           key: 2,
           category: "AC"
         },
         {
           key: 3,
           category: "Wifi"
         }
       ];
     };
   
     return {
       initDiagram,
       initPalette
     };
   })();