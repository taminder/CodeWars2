function alertMe() {
	window.alert("BEALALEHEAHDFASFJADKSFHJDSKF");
}
window.onmessage = function(e){
	var command = JSON.parse(e.data);
	console.log(command);
	if(command.type == "move") {
		c2_callFunction("moveUnit", [command.values.x, command.values.y]);
		return 1;
	}
	if(command.type == "build-grid") {
		c2_callFunction("resetBoard");
		//alert("Resetting board");
		
		var grid = command.values.grid;
		for(var y = 0; y < 10; y++) {
			for(var x = 0; x < 15; x++) {
				//alert(grid[y][x]. x. y)
				c2_callFunction("renderTile", [grid[y][x], x, y]);
			}
		}
	}
	
};