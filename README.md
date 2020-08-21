Installation and configuration
Install node from https://phoenixnap.com/kb/install-node-js-npm-on-windows

Check for version by opening cmd prompt and hit "node -v"
		C:\>node -v
		v12.18.3
		
Then install angular cli
C:\>npm install -g @angular/cli
c:\>ng -version

		     _                      _                 ____ _     ___
		    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
		   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
		  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
		 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
		                |___/
		
		
		Angular CLI: 10.0.5
		Node: 12.18.3
		OS: win32 x64
		
		Angular:
		...
		Ivy Workspace:
		
		Package                      Version
		------------------------------------------------------
		@angular-devkit/architect    0.1000.5
		@angular-devkit/core         10.0.5
		@angular-devkit/schematics   10.0.5
		@schematics/angular          10.0.5
		@schematics/update           0.1000.5
		rxjs                         6.5.5
		
Then create first angular project called blog
		C:\Angular_project>ng new blog

Now open this project in editor
	C:\Angular_project>code. 
	

Now run this project
	C:\Angular_project\blog>ng serve
	
