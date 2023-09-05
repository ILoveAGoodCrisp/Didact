export class HSFunction {
	constructor(
		public name: string,
		public args: string[],
		public r_type: string,
		public desc: string
	) {}
}

export var hsFunctions = new Array<HSFunction>();

var newFunc = new HSFunction(
	"begin",
	['expression(s)'],
	"passthrough",
	"Returns the last expression in a sequence after evaluating the sequence in order",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"begin_random",
	['expression(s)'],
	"passthrough",
	"Evaluates the sequence of expressions in random order and returns the last value evaluated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"begin_count",
	['expression(s)'],
	"passthrough",
	"Evaluates the specified number of expressions in a sequence in random order and returns the last value evaluated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"begin_random_count",
	['expression(s)'],
	"passthrough",
	"Evaluates the specified number of expressions in a sequence in random order and returns the last value evaluated",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set",
	['variable_name', 'expression'],
	"passthrough",
	"Set the value of a global variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_silently",
	['variable_name', 'expression'],
	"void",
	"Set the value of a global variable without echoing the result",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"min",
	['number(s)'],
	"real",
	"Returns the minimum of all specified expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"max",
	['number(s)'],
	"real",
	"Returns the maximum of all specified expressions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep",
	['short', '[script]'],
	"void",
	"Pauses execution of this script (or, optionally, another script) for the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_sleep",
	['short', '[script]'],
	"void",
	"Pauses execution of this script (or, optionally, another script) for the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_forever",
	['[script]'],
	"void",
	"Pauses execution of this script (or, optionally, another script) forever",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sleep_until",
	['boolean', '[short]'],
	"boolean",
	"Pauses execution of this script until the specified condition is true, checking once per second unless a different number of ticks is specified. ends after the specified number of ticks if the optional argument is given, otherwise checks forever",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"wake",
	['script_name'],
	"void",
	"Wakes a sleeping script in the next update",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"inspect",
	['expression'],
	"void",
	"Prints the value of an expression to the screen for debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"branch",
	['condition', 'script'],
	"void",
	"Stops executing current script when condition met and starts the script indicated in the parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_advanced",
	['string'],
	"void",
	"Print a string to the screen for debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_network",
	['string'],
	"void",
	"Print a string to the screen for debugging purposes and distributes it to clients",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"string",
	['expression'],
	"string",
	"Creates a string from the expression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit",
	['object'],
	"unit",
	"Converts an object to a unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle",
	['object'],
	"vehicle",
	"Converts an object to a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon",
	['object'],
	"weapon",
	"Converts an object to a weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device",
	['object'],
	"device",
	"Converts an object to a device",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery",
	['object'],
	"scenery",
	"Converts an object to a scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_scenery",
	['object'],
	"effect_scenery",
	"Converts an object to a effect_scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bool",
	['value'],
	"boolean",
	"Evaluates an object as a boolean",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"real",
	['value'],
	"real",
	"Evaluates an object as a real",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"short",
	['value'],
	"short",
	"Evaluates an object as a short",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"long",
	['value'],
	"long",
	"Evaluates an object as a long",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_to_flag",
	['object_name', 'time', 'target_flag'],
	"void",
	"Moves the specified object to the specified flag over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_to_point",
	['object_name', 'time', 'target_point'],
	"void",
	"Moves the specified object to the specified point over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_along_point_set",
	['object_name', 'time', 'target_point_set'],
	"void",
	"Moves the specified object along an ordered point set over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_move_by_offset",
	['object_name', 'time', 'X_offset', 'Y_offset', 'Z_offset'],
	"void",
	"Moves the specified object by the specified vector over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_rotate_to_flag",
	['object_name', 'yaw_time', 'pitch_time', 'roll_time', 'target_flag'],
	"void",
	"Rotates the specified object to the specified flags orientation over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_rotate_to_point",
	['object_name', 'yaw_time', 'pitch_time', 'roll_time', 'target_point'],
	"void",
	"Rotates the specified object to aim at the specified point over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_rotate_by_offset",
	['object_name', 'yaw_time', 'pitch_time', 'roll_time', 'yaw_degrees', 'pitch_degrees', 'roll_degrees'],
	"void",
	"Rotates the specified object by the specified angles over the specified timespan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thread",
	['function_name'],
	"long",
	"Runs the specified static haloscript function in its own thread and continues",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"->",
	['object_name', 'member_function_call/object_member_script_name/member_variable'],
	"passthrough",
	"Call a member script function on an object, or access object member data",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"__object_list_dtor",
	['long'],
	"void",
	"Destructor function for hs object list type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"evaluate",
	['script'],
	"void",
	"Evaluate the given script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"not",
	['boolean'],
	"boolean",
	"Returns the opposite of the expression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"~",
	['real'],
	"real",
	"Returns the negative of the specified expression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pin",
	['real', 'real', 'real'],
	"real",
	"Returns the first value pinned between the second two",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print",
	['string'],
	"void",
	"Prints a string to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"log_print",
	['string'],
	"void",
	"Prints a string to the hs log file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"queue_exec",
	['string'],
	"void",
	"Executes a file full of arbitrary haloscript",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_text",
	['string'],
	"long",
	"Displays rich text on screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_text_index",
	['long', 'string'],
	"long",
	"Displays text at the given string index, overwriting any text that might already be displayed in that slot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"clear_all_text",
	[],
	"void",
	"Clears all rich text currently being displayed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_defaults",
	[],
	"void",
	"Restore rich text settings to defaults",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_lifespan",
	['long'],
	"void",
	"Set rich text render life span in ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_color",
	['real', 'real', 'real', 'real'],
	"void",
	"Set rich text color in argb format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_margins",
	['real', 'real', 'real', 'real'],
	"void",
	"Set text margins as percentage offsets from the edges of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_scale",
	['real'],
	"void",
	"Set text scale factor (default 1.0)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_indents",
	['long', 'long'],
	"void",
	"Set text indents",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_wrap",
	['boolean', 'boolean'],
	"void",
	"Set text wrap modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_font",
	['font'],
	"void",
	"Set whether the text should be bottom-justified (aligned to the bottom margin)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_justification",
	['text_justification'],
	"void",
	"Set whether the text should be bottom-justified (aligned to the bottom margin)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_alignment",
	['text_alignment'],
	"void",
	"Set the text alignment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_shadow_style",
	['text_drop_shadow_type'],
	"void",
	"Set whether the text should be bottom-justified (aligned to the bottom margin)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_text_shadow_color",
	['real', 'real', 'real', 'real'],
	"void",
	"Set rich text shadow color in argb format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_show_thread",
	['string', 'boolean'],
	"void",
	"Shows or hides the display of any thread containing the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_script_thread",
	['string_id', 'boolean'],
	"void",
	"Verbose threads spew to log about script and function calls",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting",
	['boolean'],
	"void",
	"Turn on/off hs script debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_globals",
	['boolean'],
	"void",
	"Turn on/off hs global debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_variable",
	['string', 'boolean'],
	"void",
	"Turn on/off debugging of a specific global variable); enclose the variable name with single quote characters ('my_variable')",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_scripting_variable_all",
	['boolean'],
	"void",
	"Turn on/off debugging of all global variables",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breakpoint",
	['string'],
	"void",
	"If breakpoints are enabled, pause execution when this statement is hit (displaying the given message)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_active_scripts",
	[],
	"void",
	"Terminates all currently running threads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_script",
	['script'],
	"boolean",
	"Immediately terminate the thread running the specified script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"IsThreadValid",
	['long'],
	"boolean",
	"Returns true if the given thread index is a valid running thread. returns false if no running thread with the given index exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetCurrentThreadId",
	[],
	"long",
	"Retrieves the current executing thread index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_thread",
	['long'],
	"void",
	"Kill the specified thread",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_started",
	['string_id'],
	"boolean",
	"Returns true if the continuous, dormant or startup script was started",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_finished",
	['string_id'],
	"boolean",
	"Returns true if the continuous, dormant or startup script was finished",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"local_players",
	[],
	"object_list",
	"Returns a list of the living player units on the local machine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players",
	[],
	"object_list",
	"Returns a list of the living player units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_human",
	[],
	"object_list",
	"Returns a list of the living spartan player units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_elite",
	[],
	"object_list",
	"Returns a list of the living elite player units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get",
	['long'],
	"unit",
	"Get a player unit by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_possess_ai",
	['long', 'ai'],
	"void",
	"Cause player of absolute index to possess specified ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_first_alive",
	[],
	"unit",
	"Get the first player who is alive",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_first_valid",
	[],
	"unit",
	"Get the first player who is valid and connected, alive or dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_is_alive",
	['unit'],
	"boolean",
	"Returns whether the biped is alive or dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_in_game_get",
	['long'],
	"player",
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"human_player_in_game_get",
	['long'],
	"player",
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"elite_player_in_game_get",
	['long'],
	"player",
	"Get a player by absolute index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_is_in_game",
	['player'],
	"boolean",
	"Returns true if the player is currently in the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"editor_mode",
	[],
	"boolean",
	"Return if we are currently in the editor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_volume_enable",
	['trigger_volume'],
	"void",
	"Enables a kill volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"kill_volume_disable",
	['trigger_volume'],
	"void",
	"Disables a kill volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trigger_volume_from_string",
	['string_id'],
	"trigger_volume",
	"Retrieves the trigger volume with the provided name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_not_inside",
	['trigger_volume', 'cutscene_flag'],
	"void",
	"Moves all players outside a specified trigger volume to a specified flag exiting vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_inside",
	['trigger_volume', 'cutscene_flag'],
	"void",
	"Moves all players inside the specified trigger volume to a specified flag exiting vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_not_inside_with_vehicles",
	['trigger_volume', 'cutscene_flag'],
	"void",
	"Moves all players outside a specified trigger volume to a specified flag with vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_teleport_players_inside_with_vehicles",
	['trigger_volume', 'cutscene_flag'],
	"void",
	"Moves all players inside the specified trigger volume to a specified flag with vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"teleport_player_to_flag",
	['player', 'cutscene_flag', 'boolean'],
	"void",
	"Teleports a player to the specified flag with or without their vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_object",
	['trigger_volume', 'object'],
	"boolean",
	"Returns true if the specified object is within the specified volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_object_bounding_sphere_center",
	['trigger_volume', 'object'],
	"boolean",
	"Returns true if the specified object's bounding sphere center is within the specified volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_objects",
	['trigger_volume', 'object_list'],
	"boolean",
	"Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_objects_all",
	['trigger_volume', 'object_list'],
	"boolean",
	"Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players",
	['trigger_volume'],
	"boolean",
	"Returns true if any players are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players_all",
	['trigger_volume'],
	"boolean",
	"Returns true if all players are within the specified volume. trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_return_objects",
	['trigger_volume'],
	"object_list",
	"Returns list of objects in volume or (max 128)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_return_objects_by_type",
	['trigger_volume', 'long'],
	"object_list",
	"Returns list of objects in volume or (max 128)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_return_objects_by_campaign_type",
	['trigger_volume', 'long'],
	"object_list",
	"Returns list of objects of the specified campaign metagame type that is in the volume or (max 128)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"zone_set_trigger_volume_enable",
	['string_id', 'boolean'],
	"void",
	"Enables/disables the trigger volume(s) with the given name that cause zone set switches",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players_lookat",
	['trigger_volume', 'real', 'real'],
	"boolean",
	"Returns true if the trigger volume is viewable by any player (with the specified parameters). trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"volume_test_players_all_lookat",
	['trigger_volume', 'real', 'real'],
	"boolean",
	"Returns true if the trigger volume is viewable by all players (with the specified parameters). trigger volume must have been postprocessed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trigger_volume_stats",
	[],
	"void",
	"Print stats about current trigger volume usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_get",
	['object_list', 'short'],
	"object",
	"Returns an item in an object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_count",
	['object_list'],
	"short",
	"Returns the number of objects in a list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_count_not_dead",
	['object_list'],
	"short",
	"Returns the number of objects in a list that aren't dead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new",
	['effect', 'cutscene_flag'],
	"void",
	"Starts the specified effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_delete_from_flag",
	['effect', 'cutscene_flag'],
	"void",
	"Deletes the specified effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_kill_from_flag",
	['effect', 'cutscene_flag'],
	"void",
	"Deletes the specified effect at the specified flag, and kills all the particles from it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_restart_all_instances",
	['effect'],
	"void",
	"Deletes the specified effect at all instance and restarts them",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_delete_all_in_volume",
	['trigger_volume'],
	"void",
	"Deletes all unattached effects in the given volume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_random",
	['effect', 'point_reference'],
	"void",
	"Starts the specified effect at one of the points in the given a point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_random",
	['effect', 'point_reference', 'real', 'real'],
	"void",
	"Starts the specified effect at one of the points in the given a point set, with a given yaw/pitch perturbation (in that order)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_at_ai_point",
	['effect', 'point_reference'],
	"void",
	"Starts the specified effect at the specified ai point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_at_point_set_point",
	['effect', 'point_reference', 'long'],
	"void",
	"Starts the specified effect at one of the points in the given a point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_object_marker",
	['effect', 'object', 'string_id'],
	"void",
	"Starts the specified effect on the specified object at the specified marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_object_marker_loop",
	['effect', 'object', 'string_id'],
	"void",
	"Starts the specified effect on the specified object at the specified marker.  effect loops",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_stop_object_marker",
	['effect', 'object', 'string_id'],
	"void",
	"Stops a running effect that's on a specified object and marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_kill_object_marker",
	['effect', 'object', 'string_id'],
	"void",
	"Stops a running effect that's on a specified object and marker, and kills all the particles from it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_on_ground",
	['effect', 'object'],
	"void",
	"Starts the specified effect on the ground underneath the object's root",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_attached_to_camera_new",
	['effect'],
	"void",
	"Starts the specified effect attached to the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_attached_to_camera_stop",
	['effect'],
	"void",
	"Stops the specified effect attached to the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_attached_to_camera_set_scale",
	['effect', 'real'],
	"void",
	"Sets the scale of the specified effect attached to the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_between_points",
	['effect', 'cutscene_flag', 'cutscene_flag'],
	"void",
	"Starts the specified effect between the specified flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"effect_new_between_object_markers",
	['effect', 'object', 'string_id', 'object', 'string_id'],
	"void",
	"Starts the specified effect between the specified objects at the specified markers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetSkyObjectOverride",
	['string_id'],
	"object",
	"Overrides the sky from the .scenario file with an explicit sky.  none to clear override",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"move_cutscene_flag",
	['cutscene_flag', 'real', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Moves a cutscene flag (from maya)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_light_cone_parameters",
	['cutscene_flag', 'real', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Changes the parameters on a light cone (from maya)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screen_effect_new",
	['any_tag', 'cutscene_flag'],
	"void",
	"Starts the specified area screen effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screen_effect_delete",
	['any_tag', 'cutscene_flag'],
	"void",
	"Deletes the specified area screen effect at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_dissolve_from_marker",
	['object', 'string_id', 'string_id'],
	"void",
	"Activates an object's dissolve of a specified type from the specified marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_clip_plane",
	['object', 'cutscene_flag'],
	"void",
	"Turns on a clip plane for the object at the given marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_clip_plane",
	['object'],
	"void",
	"Turns off the clip plane for the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_new",
	['damage', 'cutscene_flag'],
	"void",
	"Causes the specified damage at the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_effect",
	['damage', 'object'],
	"void",
	"Causes the specified damage at the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_objects_effect",
	['damage', 'object_list'],
	"void",
	"Causes the specified damage at the specified object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object",
	['object', 'string_id', 'real'],
	"void",
	"Causes the specified damage at the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_with_fire",
	['object', 'string_id', 'real'],
	"void",
	"Causes the specified damage at the specified object using fire damage response effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_with_fire_from_object",
	['object', 'object', 'string_id', 'real'],
	"void",
	"Causes the specified damage at the specified object using fire damage response effect with the fire objects position for damage origin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_object_with_fire_from_trigger_volume",
	['object', 'trigger_volume', 'string_id', 'real'],
	"void",
	"Causes the specified damage at the specified object using fire damage response effect with the trigger volumes centre of mass for damage origin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_objects",
	['object_list', 'string_id', 'real'],
	"void",
	"Causes the specified damage at the specified object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_players",
	['damage'],
	"void",
	"Damages all players with the given damage effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"soft_ceiling_enable",
	['string_id', 'boolean'],
	"void",
	"Turn on or off a soft ceiling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_damaged_by_unit",
	['player', 'long', 'short'],
	"boolean",
	"Has player been damaged by given unit within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_damaged_by_ai",
	['player', 'ai', 'short'],
	"boolean",
	"Has player been damaged by specified ai within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_damaged_by_weapon",
	['player', 'object_definition', 'short'],
	"boolean",
	"Has player been damaged by given weapon type within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_damaged_by_unit",
	['object_list', 'long', 'short'],
	"boolean",
	"Has anyone in player unit list been damaged by given unit within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_damaged_by_ai",
	['object_list', 'ai', 'short'],
	"boolean",
	"Has anyone in player unit list been damaged by specified ai within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_damaged_by_weapon",
	['object_list', 'object_definition', 'short'],
	"boolean",
	"Has anyone in player unit list been damaged by given weapon type within last x ticks?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_valid",
	['object_name'],
	"boolean",
	"Returns whether an object by this name exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_active_for_script",
	['object'],
	"boolean",
	"Returns whether the object is in a state where its scripts are running",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"find_object_name_from_string_id",
	['string_id'],
	"object_name",
	"Find an object name using a string id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create",
	['object_name'],
	"void",
	"Creates an object from the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_string_id",
	['string_id'],
	"void",
	"Creates an object from the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_variant",
	['object_name', 'string_id'],
	"void",
	"Creates an object from the scenario with a given variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_clone",
	['object_name'],
	"void",
	"Creates an object, potentially resulting in multiple objects if it already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_anew",
	['object_name'],
	"void",
	"Creates an object, destroying it first if it already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_if_necessary",
	['object_name'],
	"void",
	"Creates an object if it doesn't already exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_folder",
	['folder'],
	"void",
	"Creates all the objects in the given folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_create_folder_anew",
	['folder'],
	"void",
	"Creates all the objects in the given folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy",
	['object'],
	"void",
	"Destroys an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_all",
	[],
	"void",
	"Destroys all non player objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_type_mask",
	['long'],
	"void",
	"Destroys all objects matching the type mask",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_list",
	['object_list'],
	"void",
	"Destroys all objects in a list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_delete_by_definition",
	['object_definition'],
	"void",
	"Deletes all objects of type <definition>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_destroy_folder",
	['folder'],
	"void",
	"Destroys all objects in the given folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_hide",
	['object', 'boolean'],
	"void",
	"Hides or shows the object passed in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shadowless",
	['object', 'boolean'],
	"void",
	"Set/reset shadow castingness of object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_allegiance",
	['object', 'team'],
	"void",
	"Sets what campaign team the object belongs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"lookup_object_name_index_by_name",
	['object_name'],
	"void",
	"Displays the scenario object index for the given name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"lookup_folder_index_by_name",
	['folder'],
	"void",
	"Displays the scenario folder index for the given name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hs_object_buckling_magnitude_get",
	['object'],
	"real",
	"Returns the amoount [0-1] that a scarab is buckling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_function_set",
	['long', 'real'],
	"void",
	"Sets a global object function (0-3) to value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cortana_rampancy_set",
	['real'],
	"void",
	"Sets cortana's rampancy value, from 0 to 1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cortana_rampancy_get",
	[],
	"real",
	"Returns cortana's rampancy value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"self_illum_color_setting_set",
	['long'],
	"void",
	"Sets forerunner self illumination color setting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"self_illum_color_setting_get",
	[],
	"long",
	"Gets forerunner self illumination color setting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_function_variable",
	['object', 'string_id', 'real', 'real'],
	"void",
	"Sets funciton variable for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_cinematic_function_variable",
	['object', 'boolean', 'string_id', 'real', 'real'],
	"void",
	"Sets funciton variable for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_cinematic_function_variable",
	['object', 'boolean', 'string_id'],
	"void",
	"Clears one funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_clear_all_cinematic_function_variables",
	['object', 'boolean'],
	"void",
	"Clears all funciton variables for sin-o-matic use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_dynamic_simulation_disable",
	['object', 'boolean'],
	"void",
	"Disabled dynamic simulation for this object (makes it fixed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_phantom_power",
	['object', 'boolean'],
	"void",
	"Sets phantom power to be latched at 1.0f or 0.0f",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_phantom_directional_multiplier",
	['object', 'real'],
	"void",
	"Sets directional acceleration multiplier",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_wake_physics",
	['object'],
	"void",
	"Wakes physics of an object.  for example it would make an usupported crate fall",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_at_rest",
	['object'],
	"boolean",
	"Returns whether or not an object's physics is at rest",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_dispose",
	['object'],
	"void",
	"Marks a placed object as garbage to be collected on next pass",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_x",
	['object'],
	"real",
	"Returns x component of object's world location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_y",
	['object'],
	"real",
	"Returns y component of object's world location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_z",
	['object'],
	"real",
	"Returns z component of object's world location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_ranged_attack_inhibited",
	['object', 'boolean'],
	"void",
	"False prevents object from using ranged attack",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_melee_attack_inhibited",
	['object', 'boolean'],
	"void",
	"False prevents object from using melee attack",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_dump_memory",
	[],
	"void",
	"Debugs object memory usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_current_zone_set_objects",
	[],
	"void",
	"Dumps objects loaded in the current zone set according to bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_maximum_vitality",
	['object', 'boolean'],
	"real",
	"Object_get_maximum_vitality <object> <ignoredifficulty_bool>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_health",
	['object'],
	"real",
	"Returns the health [0,1] of the object, returns -1 if the object does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_health",
	['object', 'real'],
	"void",
	"Set the health [0,1] of the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_shield",
	['object'],
	"real",
	"Returns the shield [0,1] of the object, returns -1 if the object does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_effect",
	['object', 'real', 'real'],
	"void",
	"Sets the shield response effect (not current shield amount) to a given value over the given number of seconds (cinematic use only, remember to call (object_set_shield_effect 0 0) after use!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_physics",
	['object', 'boolean'],
	"void",
	"Prevents an object from running physics or colliding with any other objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_override_physics_motion_type",
	['object', 'long'],
	"void",
	"Overrides the motion type of the object [1st paramater object, 2nd parameter 0:default, 1:fixed, 2:keyframed, 3:dynamic]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_parent",
	['object'],
	"object",
	"Returns the parent of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_attach",
	['object', 'string_id', 'object', 'string_id'],
	"void",
	"Attaches the second object to the first both strings can be empty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_physically_attach",
	['object', 'string_id', 'object', 'string_id'],
	"void",
	"Attaches the second object to the first and keeps the child physical both strings can be empty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_at_marker",
	['object', 'string_id'],
	"object",
	"Returns the object attached to the marker of the given parent object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_detach",
	['object', 'object'],
	"void",
	"Detaches from the given parent object the given child object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_scale",
	['object', 'real', 'short'],
	"void",
	"Sets the scale for a given object and interpolates over the given number of frames to achieve that scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_velocity",
	['object', 'real'],
	"void",
	"Sets the (object-relative) forward velocity of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_bsp",
	['object'],
	"short",
	"Returns the bsp index that the object is in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_velocity",
	['object'],
	"real",
	"Returns the singular velocity of the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_as_fireteam_target",
	['object', 'boolean'],
	"void",
	"Sets the object as something that the fireteam selection process is interested in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_is_reserved",
	['object'],
	"boolean",
	"Checks whether a given object has been reserved by a fireteam",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_velocity",
	['object', 'real', 'real', 'real'],
	"void",
	"Sets the (object-relative) velocity of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_angular_velocity",
	['object', 'real', 'real', 'real'],
	"void",
	"Sets the (object-relative) angular velocity of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_deleted_when_deactivated",
	['object'],
	"void",
	"When this object deactivates it will be deleted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_copy_player_appearance",
	['object', 'long'],
	"void",
	"Copy appearance into object from player n (starts counting from 0)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_model_target_destroyed",
	['object', 'string_id'],
	"boolean",
	"Returns true if the specified model target is destroyed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_model_targets_destroyed",
	['object', 'string_id'],
	"short",
	"Returns true if the specified model target is destroyed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_enable_damage_section",
	['object', 'string_id', 'real'],
	"void",
	"Enables the specified damage section on the specified object with the specified initial vitality(mostly for debugging purposes)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_disable_damage_section",
	['object', 'string_id'],
	"void",
	"Disables the specified damage section on the specified object (mostly for debugging purposes)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_damage_damage_section",
	['object', 'string_id', 'real'],
	"void",
	"Applies damage to a damage section, causing all manner of effects/constraint breakage to occur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_damage_repair_section",
	['object', 'string_id', 'real'],
	"void",
	"Applies repair to a damage section",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cannot_die",
	['object', 'boolean'],
	"void",
	"Set whether the object can die from damage or not (as opposed to by scripting)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cannot_die_except_kill_volumes",
	['object', 'boolean'],
	"void",
	"Set whether the object can die from damage or not (as opposed to by scripting), except for kill volumes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_ignores_emp",
	['object', 'boolean'],
	"void",
	"Sets whether the object will by immune to emp damage side effects (ie: vehicle disabling)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_vitality_pinned",
	['object'],
	"boolean",
	"Returns true if the object's vitality is currently pinned at some minimum value because it cannot die",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"garbage_collect_now",
	[],
	"void",
	"Causes all garbage objects except those visible to a player to be collected immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"garbage_collect_unsafe",
	[],
	"void",
	"Forces all garbage objects to be collected immediately, even those visible to a player (dangerous!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"garbage_collect_multiplayer",
	[],
	"void",
	"Runs multiplayer garbage collection",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cannot_take_damage",
	['object_list'],
	"void",
	"Prevents an object from taking damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_recent_body_damage",
	['object'],
	"real",
	"Get object recent body damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_recent_shield_damage",
	['object'],
	"real",
	"Get object recent shield damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_can_take_damage",
	['object_list'],
	"void",
	"Allows an object to take damage again",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_immune_to_friendly_damage",
	['object_list', 'boolean'],
	"void",
	"Controls whether an object takes damage from friendly objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cinematic_lod",
	['object', 'boolean'],
	"void",
	"Makes an object use the highest lod for the remainder of the levels' cutscenes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cinematic_collision",
	['object', 'boolean'],
	"void",
	"Makes an object not collide with other cinematic collision objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_cinematic_visibility",
	['object', 'boolean'],
	"void",
	"Makes an object bypass visibility and always render during cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict",
	['object_list'],
	"void",
	"Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict_high",
	['object_list'],
	"void",
	"Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_predict_low",
	['object_list'],
	"void",
	"Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_predict_high",
	['object_definition'],
	"void",
	"Loads textures necessary to draw an object that's about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_predict_low",
	['object_definition'],
	"void",
	"Loads textures necessary to draw an object that's about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_predict",
	['object_definition'],
	"void",
	"Loads textures necessary to draw an object that's about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_teleport",
	['object', 'cutscene_flag'],
	"void",
	"Moves the specified object to the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_teleport_to_ai_point",
	['object', 'point_reference'],
	"void",
	"Moves the specified object to the specified ai point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_orientation_direct",
	['object', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Moves the specified object to the given world-space position and orientation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_orientation_direct_by_id",
	['long', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Moves the specified (by uid) object to the given world-space position and orientation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_child_interaction_locked",
	['object', 'boolean'],
	"void",
	"Set or clear a lock on the interaction with any children of this object.  use to lock the contents of a closed crate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_cinematic_visibility",
	['object', 'boolean'],
	"void",
	"Turn on or off forced inclusion of this object in the visible set, as if a cinematic object.  use with caution.  use to make control object device machines part of the scene so children don't become inactive.  <object> <true/false>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_type_get_variant_index",
	['object_definition', 'string_id'],
	"long",
	"Returns variant index from object tag and variant name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_teleport_to_object",
	['object', 'object'],
	"void",
	"Moves the specified object to in front of the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_teleport_to_location",
	['real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Teleports player to a given location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prefab_set_scale",
	['long', 'long', 'real'],
	"void",
	"Sets the scale of a prefab, and all of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prefab_set_rotation",
	['long', 'long', 'real', 'real', 'real', 'real'],
	"void",
	"Sets the rotation of a prefab, and all of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prefab_set_translation",
	['long', 'long', 'real', 'real', 'real'],
	"void",
	"Sets the translation of a prefab, and all of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_facing",
	['object', 'cutscene_flag'],
	"void",
	"Turns the specified object in the direction of the specified flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield",
	['object', 'real'],
	"void",
	"Sets the shield vitality of the specified object (between 0 and 1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_stun",
	['object', 'real'],
	"void",
	"Set how long the shield will be stunned for, 0 is unstunned",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_shield_stun_infinite",
	['object'],
	"void",
	"Make this objects shield be stunned permanently",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_permutation",
	['object', 'string_id', 'string_id'],
	"void",
	"Sets the desired region (use  for all regions) to the permutation with the given name, e.g. (object_set_permutation flood right arm ~damaged)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_variant",
	['object', 'string_id'],
	"void",
	"Sets the specified object to the specified model variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_region_state",
	['object', 'string_id', 'model_state'],
	"void",
	"Sets the desired region (use  for all regions) to the model state with the given name, e.g. (object_set_region_state marine head destroyed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_model_state_property",
	['object', 'long', 'boolean'],
	"void",
	"Sets the desired region (use  for all regions) to the model state with the given name, e.g. (object_set_region_state marine head destroyed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_region_properties",
	['object', 'string_id'],
	"short",
	"Gets the current model properties of the desired region, e.g. (object_get_region_properties marine head)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_can_see_object",
	['object_list', 'object', 'real'],
	"boolean",
	"Returns true if any of the specified units are looking within the specified number of degrees of the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_can_see_flag",
	['object_list', 'cutscene_flag', 'real'],
	"boolean",
	"Returns true if any of the specified units are looking within the specified number of degrees of the flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_object",
	['object_list', 'object'],
	"real",
	"Returns minimum distance from any of the specified objects to the specified destination object. (returns -1 if there are no objects to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_flag",
	['object_list', 'cutscene_flag'],
	"real",
	"Returns minimum distance from any of the specified objects to the specified flag. (returns -1 if there are no objects, or no flag, to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_point",
	['object_list', 'point_reference'],
	"real",
	"Returns minimum distance from any of the specified objects to the specified flag. (returns -1 if there are no objects, or no flag, to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ObjectOverrideNavMeshCutting",
	['object', 'boolean'],
	"void",
	"Force an object to cut or not cut the navmesh",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ObjectOverrideNavMeshObstacle",
	['object', 'boolean'],
	"void",
	"Force an object to generate or not generate navmesh obstacles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_info",
	[],
	"void",
	"Prints the map, zone set, active bsps, and current bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"position_predict",
	['real', 'real', 'real'],
	"void",
	"In: x, y, z position. loads textures/geometry/sounds necessary to present locations that are about to come on-screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_predict",
	['shader'],
	"void",
	"In: shader name. loads textures necessary for a shader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bitmap_predict",
	['bitmap'],
	"void",
	"In: bitmap name. loads all the bitmaps in that bitmap group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_recompile",
	[],
	"void",
	"Recompiles scripts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_doc",
	[],
	"void",
	"Saves a file called hs_doc.txt with parameters for all script commands",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"help",
	['string'],
	"void",
	"Prints a description of the named function",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_objects",
	[],
	"object_list",
	"Returns a list of the special game engine objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_range",
	['short', 'short'],
	"short",
	"Returns a random value in the range [lower bound, upper bound]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"real_random_range",
	['real', 'real'],
	"real",
	"Returns a random value in the range [lower bound, upper bound]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_force_value",
	['string', 'real'],
	"void",
	"Makes any random for the purpose return the supplied value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"random_display_value",
	['string'],
	"void",
	"Display the value for the given random purpose",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_constants_reset",
	[],
	"void",
	"Resets all physics constants to earthly values",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_set_gravity",
	['real'],
	"void",
	"Set global gravity acceleration relative to halo standard gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_get_gravity",
	[],
	"real",
	"Get global gravity acceleration relative to halo standard gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_toggle_force_gravity_actions",
	['boolean', 'real'],
	"void",
	"Toggle forcing gravity actions on all objects that get created",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_set_velocity_frame",
	['real', 'real', 'real'],
	"void",
	"Sets a local frame of motion for updating physics of things that wish to respect it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_disable_character_ground_adhesion_forces",
	['real'],
	"void",
	"Turn off ground adhesion forces so you can play tricks with gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_gravity",
	['object', 'real', 'boolean'],
	"void",
	"Sets the gravity local to this object. this is relative to halo gravity(earth*1.3), just like physics_set_gravity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physics_remove_all_gravity_actions",
	[],
	"void",
	"Turn off all gravity actions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_time_is_time",
	['long', 'long', 'long', 'long', 'long', 'long'],
	"boolean",
	"In: year,month,day,hour,minute,seconds. returns true if the time specified is the current time. mask out inputs with -1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_set_enabled",
	['boolean'],
	"void",
	"Enables/disables a test simulation of localized physics isolated from all other physics. [bool enabled]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_setup_from_object",
	['object', 'object'],
	"void",
	"Simulates a debug object at the center of mass of the passed in object. [object early mover, object target]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_setup_relative_position",
	['object', 'real', 'real', 'real'],
	"void",
	"Simulates a debug object at a position relative to the early mover [object early mover, real x, real y, real z]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"localized_physics_debug_simulator_realign",
	[],
	"void",
	"Realigns the simulated object with the early mover [void]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_debug_start",
	[],
	"void",
	"Start up the havok visual debugger",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_debug_stop",
	[],
	"void",
	"Stops the havok debug capture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_dump_world",
	['string', 'boolean'],
	"void",
	"Dump the state of the havok world, with our without a movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_dump_world_close_movie",
	[],
	"void",
	"End the capture of a havok dump movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_start",
	[],
	"void",
	"Start profiling havok",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_stop",
	[],
	"void",
	"Stop profiling havok, and save the results",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_profile_range",
	['long', 'long'],
	"void",
	"Captures timers and a movie of a specific tick range",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_reset_allocated_state",
	[],
	"void",
	"Strips down and builds back up all allocated havok memory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_memory_enable_callstack_tracing",
	['boolean'],
	"void",
	"Enables or disables havok memory system callstack traces",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"havok_memory_dump_to_files",
	[],
	"void",
	"Dumps stacktrace and tracker data to files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breakable_surfaces_enable",
	['boolean'],
	"void",
	"Enables or disables breakability of all breakable surfaces on level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"HavokRemoveBSPRigidBodies",
	['long'],
	"void",
	"Remove bsp rigid body",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"HavokAddBSPRigidBodies",
	['long'],
	"void",
	"Remove bsp rigid body",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"breakable_surfaces_reset",
	[],
	"void",
	"Restores all breakable surfaces",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_play",
	['unit', 'cutscene_recording'],
	"boolean",
	"Make the specified unit run the specified cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_play_and_delete",
	['unit', 'cutscene_recording'],
	"boolean",
	"Make the specified unit run the specified cutscene recording, deletes the unit when the animation finishes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_play_and_hover",
	['vehicle', 'cutscene_recording'],
	"boolean",
	"Make the specified vehicle run the specified cutscene recording, hovers the vehicle when the animation finishes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_kill",
	['unit'],
	"void",
	"Kill the specified unit's cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"recording_time",
	['unit'],
	"long",
	"Return the time remaining in the specified unit's cutscene recording",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_lights",
	['boolean'],
	"boolean",
	"Enables/disables dynamic lights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"print_light_state",
	[],
	"void",
	"Outputs text light state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_lights_enable_cinematic_shadow",
	['boolean', 'object', 'string_id', 'real'],
	"void",
	"Enable/disable the specified unit to receive cinematic shadows where the shadow is focused about a radius around a marker name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_object_marker",
	['object', 'string_id', 'real'],
	"void",
	"Sets the render texture camera to a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_position",
	['real', 'real', 'real'],
	"void",
	"Sets the render texture camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_target",
	['real', 'real', 'real'],
	"void",
	"Sets the render texture camera target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_attach_to_object",
	['object', 'string_id'],
	"void",
	"Attaches the render texture camera to a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_target_object",
	['object', 'string_id'],
	"void",
	"Targets the render texture camera to view a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_position_world_offset",
	['real', 'real', 'real'],
	"void",
	"Adds a worldspace offset to the current texture camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_on",
	[],
	"void",
	"Turns on the render texture camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_bink",
	[],
	"void",
	"Turns on the render texture camera and renders a bink to it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_off",
	[],
	"void",
	"Turns off the render texture camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_aspect_ratio",
	['real'],
	"void",
	"Sets the texture camera aspet ratio",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_resolution",
	['long', 'long'],
	"void",
	"Sets the texture camera render resolution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_render_mode",
	['long'],
	"void",
	"Switches the texture camera render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_fov",
	['real'],
	"void",
	"Sets the field of view on the texture camera, in degrees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_set_fov_frame_target",
	['real'],
	"void",
	"Zooms the field of view to frame the target, with target zoom factor to zoom closer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"texture_camera_enable_dynamic_lights",
	['boolean'],
	"void",
	"Toggle rendering of dynamic lights in the texture camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_on",
	['long'],
	"void",
	"Turns on the hud camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_off",
	['long'],
	"void",
	"Turns off the hud camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_set_position",
	['long', 'real', 'real', 'real'],
	"void",
	"Sets the render texture camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_set_target",
	['long', 'real', 'real', 'real'],
	"void",
	"Sets the render texture camera target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_attach_to_object",
	['long', 'object', 'string_id'],
	"void",
	"Attaches the render texture camera to a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_target_object",
	['long', 'object', 'string_id'],
	"void",
	"Targets the render texture camera to view a given object marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_structure",
	['long', 'boolean'],
	"void",
	"Toggle rendering of structure in the hud camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_highlight_object",
	['long', 'object', 'real', 'real', 'real', 'real'],
	"void",
	"Highlights an object in the given color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_clear_objects",
	['long'],
	"void",
	"Clears all objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_spin_around",
	['long', 'object'],
	"void",
	"Makes the hud camera spin around the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_from_player_view",
	['long'],
	"void",
	"Aligns the hud camera to the player camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_camera_window",
	['long', 'real', 'real', 'real', 'real'],
	"void",
	"Sets the render window of the hud camera (0...1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"enable_first_person_fov",
	['object', 'boolean', 'short'],
	"void",
	"Enable or disable the first-person fov tweak",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_texture_camera",
	['boolean'],
	"void",
	"Toggles displaying the texture camera in the corner of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_cheap_particles",
	['boolean'],
	"void",
	"Toggles displaying the cheap particle buffer in the corner of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_rain_occlusion",
	['boolean'],
	"void",
	"Toggles displaying the rain occlusion in the corner of the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_rain_fog",
	['boolean'],
	"void",
	"Toggles rendering rain fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_rain_toggle",
	[],
	"void",
	"Toggles rain debug modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_animate",
	['string_id', 'real', 'real'],
	"void",
	"Turns on the named weather to a specified amount in the given seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weather_animate_force",
	['string_id', 'real', 'real'],
	"void",
	"Turns on the named weather to a specified amount in the given seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_structure_cluster",
	['long', 'long'],
	"void",
	"Specify a structure and cluster to debug",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_cluster_visibility",
	['long'],
	"void",
	"Enables cluster visibility debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_cluster_fog",
	['long'],
	"void",
	"Enables cluster fog debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_plane",
	['long'],
	"void",
	"Enables fog plane debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_plane_infinite_extent",
	['long'],
	"void",
	"Enables fog plane debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_zone",
	['long'],
	"void",
	"Enabled fog zone debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_fog_zone_floodfill",
	['long'],
	"void",
	"Enables fog zone debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_all_fog_planes",
	['boolean'],
	"void",
	"Enables fog plane debugging (all)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_all_cluster_errors",
	['boolean'],
	"void",
	"Enables cluster error debugging (all)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_line_opacity",
	['real', 'real', 'real', 'real'],
	"void",
	"Sets the opacity (0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_text_opacity",
	['real', 'real', 'real', 'real'],
	"void",
	"Sets the opacity (0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_opacity",
	['real', 'real', 'real', 'real'],
	"void",
	"Sets the opacity (0 is default)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_non_occluded_fog_planes",
	['boolean'],
	"void",
	"Controls non-occluded fog plane debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_use_pervertex",
	[],
	"void",
	"Sets the lightmap preference to per-vertex, ignores per-pixel if available",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_use_reset",
	[],
	"void",
	"Resets the lightmap preference setting and updates the internal lightmap bsp data if necessary",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_sample_enable",
	[],
	"void",
	"Enables visualization of match samples if available",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_structure_lightmaps_sample_disable",
	[],
	"void",
	"Disables visualization of match samples",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_object_bitmaps",
	['string'],
	"void",
	"Substring of object definition name to spew out it's debug usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_bsp_resources",
	['long', 'boolean'],
	"void",
	"Bsp index and whether to spit out all bitmaps used",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_all_object_resources",
	[],
	"void",
	"Outputs text of texture and geometry memory usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_object_list",
	[],
	"void",
	"Outputs list of active objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_query_d3d_resources",
	[],
	"void",
	"Outputs text of d3d resource usage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_text_using_simple_font",
	['boolean'],
	"void",
	"Toggles use of the much faster simple_font system for debug text rendering",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_postprocess_color_tweaking_reset",
	[],
	"void",
	"Resets hue saturation filters to default",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_wrinkle_weights_a",
	['real', 'real', 'real', 'real'],
	"void",
	"Manually set wrinkle weights for mask a",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_wrinkle_weights_b",
	['real', 'real', 'real', 'real'],
	"void",
	"Manually set wrinkle weights for mask b",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_wrinkle_weights_from_console",
	['boolean'],
	"void",
	"Toggles whether debug wrinkle weights come from animation data or console commands",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start",
	['scenery', 'animation_graph', 'string_id'],
	"void",
	"Starts a custom animation playing on a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_loop",
	['scenery', 'animation_graph', 'string_id'],
	"void",
	"Starts a custom looping animation playing on a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_relative",
	['scenery', 'animation_graph', 'string_id', 'object'],
	"void",
	"Starts a custom animation playing on a piece of scenery relative to a parent object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_relative_loop",
	['scenery', 'animation_graph', 'string_id', 'object'],
	"void",
	"Starts a custom looping animation playing on a piece of scenery relative to a parent object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_at_frame",
	['scenery', 'animation_graph', 'string_id', 'short'],
	"void",
	"Starts a custom animation playing on a piece of scenery at a specific frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_relative_at_frame",
	['scenery', 'animation_graph', 'string_id', 'object', 'short'],
	"void",
	"Starts a custom animation playing on a piece of scenery relative to a specific cutscene flag at a specific frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_idle",
	['scenery'],
	"void",
	"Starts the idle animation (if any) for a piece of scenery",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_get_animation_time",
	['scenery'],
	"short",
	"Returns the number of ticks remaining in a custom animation (or zero, if the animation is over)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_can_blink",
	['unit', 'boolean'],
	"void",
	"Allows a unit to blink or not (units never blink when they are dead)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_active_camo",
	['unit', 'boolean', 'real'],
	"void",
	"Enable or disable active camo for the given unit over the specified number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_toggle_open",
	['unit'],
	"void",
	"Toggles the hatches on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_open",
	['unit'],
	"void",
	"Opens the hatches on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_close",
	['unit'],
	"void",
	"Closes the hatches on a given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_kill",
	['unit'],
	"void",
	"Kills a given unit, no saving throw",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_kill_silent",
	['unit'],
	"void",
	"Kills a given unit silently (doesn't make them play their normal death animation or sound)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_kill_list_silent",
	['object_list'],
	"void",
	"Kills a list of units silently (doesn't make them play their normal death animation or sound)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_emitting",
	['unit'],
	"boolean",
	"Returns whether or not the given unit is current emitting an ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_emp_stunned",
	['unit'],
	"boolean",
	"This will return whether the unit is stunned by emp damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_custom_animation_time",
	['unit'],
	"short",
	"Returns the number of ticks remaining in a unit's custom animation (or zero, if the animation is over)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_stop_custom_animation",
	['unit'],
	"void",
	"Stops the custom animation running on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	"Starts a custom animation playing on a unit (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_loop",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	"Starts a custom animation playing on a unit (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_hold_last_frame",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	"Starts a custom animation playing on a unit and holds on the last frame (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_start_stopping_at_frame_and_hold",
	['unit', 'animation_graph', 'string_id', 'boolean', 'real'],
	"boolean",
	"Starts a custom animation playing on a unit and holds when it reaches the specified frame (unit, string animation_graph, string animation_name, bool interpolate, real frame)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_relative",
	['unit', 'animation_graph', 'string_id', 'boolean', 'object'],
	"boolean",
	"Starts a custom animation relative to some other object (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_relative_loop",
	['unit', 'animation_graph', 'string_id', 'boolean', 'object'],
	"boolean",
	"Starts a custom animation relative to some other object (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_animation_list",
	['object_list', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	"Starts a custom animation playing on a unit list (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_custom_animation_at_frame",
	['unit', 'animation_graph', 'string_id', 'boolean', 'short'],
	"boolean",
	"Starts a custom animation playing on a unit at a specific frame index(interpolates into animation if next to last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_custom_animation_relative_at_frame",
	['unit', 'animation_graph', 'string_id', 'string_id', 'boolean', 'short'],
	"boolean",
	"Starts a custom animation playing on a unit relative to a specific cutscene flag at a specific frame index(interpolates into animation if next to last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_playing_custom_animation",
	['unit'],
	"boolean",
	"Returns true if the given unit is still playing a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_set_file_name",
	['string'],
	"void",
	"Sets the file name used for the animation capture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_set_origin_object_name",
	['string_id'],
	"void",
	"Sets the name of the object that will be used as the capture origin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_start_recording",
	[],
	"void",
	"Starts capturing animation on the object currently possessed by the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_capture_stop_recording",
	[],
	"void",
	"Stops capturing animation on the object currently possessed by the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sync_action_create",
	['unit', 'string_id'],
	"boolean",
	"This will spawn all actors necessary to play a sync action and play it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_running_sync_action",
	['object', 'string_id'],
	"boolean",
	"Returns true if the given object is running the named sync action",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_custom_animations_hold_on_last_frame",
	['boolean'],
	"void",
	"Changes the default behavior for custom animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_custom_animations_prevent_lipsync_head_movement",
	['boolean'],
	"void",
	"When true, prevents lipsync from bobbing the head during custom animations. default is true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"preferred_animation_list_add",
	['object', 'string_id'],
	"boolean",
	"Adds an animation into the 'preferred list' of animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"preferred_animation_list_clear",
	[],
	"void",
	"Clears the 'preferred list' of animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_team_index",
	['unit'],
	"team",
	"Returns the team index of the unit, returns -1 if the unit does not have a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_aim_without_turning",
	['unit', 'boolean'],
	"void",
	"Allows a unit to aim in place without turning",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_enterable_by_player",
	['unit', 'boolean'],
	"void",
	"Can be used to prevent the player from entering a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_enterable_by_player",
	['unit'],
	"boolean",
	"Returns true if a player may enter the vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_only_takes_damage_from_players_team",
	['unit', 'boolean'],
	"void",
	"Used for the tartarus boss fight",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle",
	['unit', 'unit', 'string_id'],
	"void",
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enter_vehicle_immediate",
	['unit', 'unit', 'string_id'],
	"void",
	"Puts the specified unit in the specified vehicle (in the named seat)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_falling_damage_disable",
	['unit', 'boolean'],
	"void",
	"Disables falling damage on unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_in_vehicle_type",
	['unit', 'long'],
	"boolean",
	"Returns true if the unit is in a vehicle that matches the specified vehicle type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_in_air_ticks",
	['vehicle'],
	"long",
	"Returns number of ticks the vehicle has been airborne",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_turret_count",
	['object'],
	"short",
	"Returns the number of turrets attached to the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_turret",
	['object', 'short'],
	"vehicle",
	"Returns the nth turret attached to the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_board_vehicle",
	['unit', 'string_id'],
	"void",
	"Causes the given unit to attempt to board the named seat",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion",
	['unit', 'long', 'real', 'real'],
	"void",
	"Sets a unit's facial expression (-1 is none, other values depend on unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_emotion_by_name",
	['unit', 'string_id', 'real', 'real'],
	"void",
	"Sets a unit's facial expression by name with weight and transition time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enable_eye_tracking",
	['unit', 'boolean'],
	"void",
	"Enable/disable eye aiming on a unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_integrated_flashlight",
	['unit', 'boolean'],
	"void",
	"Sets a unit's flashlight on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_in_vehicle",
	['unit'],
	"boolean",
	"Returns true if the given unit is seated on a parent unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_vehicle",
	['unit'],
	"vehicle",
	"Returns the parent vehicle if the given unit is seated in one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_set_player_interaction",
	['vehicle', 'unit_seat_mapping', 'boolean', 'boolean'],
	"void",
	"Allows players/units to enter/exit given vehicle seat. arguments <vehicle> <seat> <player_can_enter> <unit_can_exit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_set_unit_interaction",
	['vehicle', 'unit_seat_mapping', 'boolean', 'boolean'],
	"void",
	"Allows players/units to enter/exit given vehicle seat. arguments <vehicle> <seat> <player_can_enter> <unit_can_exit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_unit_list",
	['unit', 'unit_seat_mapping', 'object_list'],
	"boolean",
	"Tests whether the named seat has an object in the object list (use  to test all seats for any unit in the list)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat_unit",
	['unit', 'unit_seat_mapping', 'unit'],
	"boolean",
	"Tests whether the named seat has a specified unit in it (use  to test all seats for this unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_test_seat",
	['unit', 'unit_seat_mapping'],
	"boolean",
	"Tests whether the named seat has any unit in it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_prefer_tight_camera_track",
	['unit', 'boolean'],
	"void",
	"Sets the unit to prefer a tight camera track",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_test_seat",
	['unit', 'unit_seat_mapping'],
	"boolean",
	"Tests whether the named seat has any unit in it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_set_collision_group",
	['vehicle', 'havok_group'],
	"void",
	"Override a vehicle's collision group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_ultimate_parent_vehicle_collision_group",
	['object', 'havok_group'],
	"void",
	"Override a unit's ultimate parent's collision group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_exit_vehicle",
	['unit'],
	"void",
	"Makes a unit exit its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_exit_vehicle",
	['unit', 'short'],
	"void",
	"Makes a unit exit its vehicle (0 = normal exit to airborne, 1 = ejection, 2 = ejection + death, 3 = exit to ground)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_maximum_vitality",
	['object', 'real', 'real'],
	"void",
	"Sets a objects's maximum body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_maximum_vitality",
	['unit', 'real', 'real'],
	"void",
	"Sets a unit's maximum body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"units_set_maximum_vitality",
	['object_list', 'real', 'real'],
	"void",
	"Sets a group of units' maximum body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_current_vitality",
	['unit', 'real', 'real'],
	"void",
	"Sets a unit's current body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"units_set_current_vitality",
	['object_list', 'real', 'real'],
	"void",
	"Sets a group of units' current body and shield vitality",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_load_magic",
	['object', 'unit_seat_mapping', 'object_list'],
	"short",
	"Makes a list of units (named or by encounter) magically get into a vehicle, in the substring-specified seats (e.g. cd-passenger... empty string matches all seats)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_unload",
	['object', 'unit_seat_mapping'],
	"short",
	"Makes units get out of an object from the substring-specified seats (e.g. cd-passenger... empty string matches all seats)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_animation_mode",
	['unit', 'string_id'],
	"void",
	"This unit will assume the named animation mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"magic_melee_attack",
	[],
	"void",
	"Causes player's unit to start a melee attack",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_riders",
	['unit'],
	"object_list",
	"Returns a list of all riders in a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_driver",
	['unit'],
	"unit",
	"Returns the driver of a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_gunner",
	['unit'],
	"unit",
	"Returns the gunner of a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_health",
	['unit'],
	"real",
	"Returns the health [0,1] of the unit, returns -1 if the unit does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_shield",
	['unit'],
	"real",
	"Returns the shield [0,1] of the unit, returns -1 if the unit does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_total_grenade_count",
	['unit'],
	"short",
	"Returns the total number of grenades for the given unit, 0 if it does not exist",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_weapon",
	['unit', 'object_definition'],
	"boolean",
	"Returns true if the <unit> has <object> as a weapon, false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_weapon_readied",
	['unit', 'object_definition'],
	"boolean",
	"Returns true if the <unit> has <object> as the primary weapon, false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_any_equipment",
	['unit'],
	"boolean",
	"Returns true if the <unit> has any equipment, false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_has_equipment",
	['unit', 'object_definition'],
	"boolean",
	"Returns true if the <unit> has equipment <object> , false otherwise",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_lower_weapon",
	['unit', 'short'],
	"void",
	"Lower the units weapon over x ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_raise_weapon",
	['unit', 'short'],
	"void",
	"Raises the units weapon over x ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_drop_support_weapon",
	['unit'],
	"void",
	"Forces the given unit to drop its support weapon, if it is holding one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_spew_action",
	['unit'],
	"void",
	"Runs the spew unit action on the specified unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_force_reload",
	['unit'],
	"void",
	"Force the give unit to reload his weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_record",
	['unit'],
	"void",
	"Records the unit <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_play_on_unit",
	['unit'],
	"void",
	"Plays a recording on the unit <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_play",
	['unit'],
	"void",
	"Plays recorded motion on the specified unit <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_play_and_blend",
	['unit', 'real'],
	"void",
	"Plays recorded motion on the specified unit and blends from where the previous recording left off <unit> <real: blend time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_playback_rate",
	['unit', 'real'],
	"void",
	"Transitions to new playback rate over specified period of time <unit> <real: desired rate> <real: smooth seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_playback_rate_smooth",
	['unit', 'real', 'real'],
	"void",
	"Sets the playback rate on the specified unit <unit> <real>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_time_position",
	['unit', 'real'],
	"void",
	"Sets the position in the time line to the specified time on the specified unit <unit> <real>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_get_time_position_seconds",
	['unit'],
	"real",
	"Get the current time position in seconds <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_pause_smooth",
	['unit', 'boolean', 'real'],
	"void",
	"Transitions to/from a pause  <unit> <bool:paused> <real:smooth_seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_rewinding",
	['unit', 'boolean'],
	"void",
	"Changes the playback direction <unit> <bool:reverse>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_set_paused",
	['boolean'],
	"void",
	"Updates the paused status<bool paused>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_pause",
	['unit', 'boolean'],
	"void",
	"Updates the paused status <unit><bool paused>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_stop",
	['unit'],
	"void",
	"Stops recording and playback <unit>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_load",
	['string'],
	"void",
	"Loads the unit recording from the specified location <string filename>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_recorder_setup_for_unit",
	['unit', 'string'],
	"void",
	"Sets up the unit to use/create a unit recording <unit> <string gamedata->scenariounitrecordings name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"animation_stats_dump",
	[],
	"void",
	"Dump usage information for the animations in the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_animation_forced_seat",
	['string_id'],
	"void",
	"All units controlled by the player will assume the given seat name (valid values are 'asleep', 'alert', 'stand', 'crouch' and 'flee')",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_doesnt_drop_items",
	['object_list'],
	"void",
	"Prevents any of the given units from dropping weapons or grenades when they die",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_impervious",
	['object_list', 'boolean'],
	"void",
	"Prevents any of the given units from being knocked around or playing ping animations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_suspended",
	['unit', 'boolean'],
	"void",
	"Stops gravity from working on the given unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_add_equipment",
	['unit', 'starting_profile', 'boolean', 'boolean'],
	"void",
	"Adds/resets the unit's health, shield, and inventory (weapons and grenades) to the named profile. resets if third parameter is true, adds if false. weapons will be marked as garbage if fourth parameter is true (for respawning equipment)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_equipment",
	['player', 'object_definition', 'boolean', 'boolean', 'boolean'],
	"void",
	"<player> <object> <dropcurrent_bool> <primary_bool> <silent_bool> last 3 args: drop or delete current, primary or hero assist, silent or play effects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_equipment",
	['unit', 'object_definition', 'boolean', 'boolean', 'boolean'],
	"void",
	"<unit> <equip_def> <dropcurrent_bool> <primary_bool> <silent_bool> last 3 args: drop or delete current, primary or hero assist, silent or play effects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_drop_weapon",
	['unit', 'weapon', 'long'],
	"void",
	"3rd arg is type: 0:default, 1:delete, 2:dual_primary, 3:dual_secondary, 4:response_to_deletion, 5:throw",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_add_weapon",
	['unit', 'weapon', 'long'],
	"boolean",
	"Returns success. 3rd arg is add method: -1:unknown, 0:normal, 1:silent, 2:as_only, 3:as_primary, 4:swap_for_primary, 5:as_secondary, 6:swap_for_secondary, 7:as_secondary_silently",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_primary_barrel_firing",
	['weapon', 'boolean'],
	"void",
	"Forcefully fire a weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_hold_trigger",
	['weapon', 'long', 'boolean'],
	"void",
	"Turns the trigger for a weapon  on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_enable_warthog_chaingun_light",
	['boolean'],
	"void",
	"Turns the trigger for a weapon  on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_current_amount",
	['weapon', 'real'],
	"void",
	"<weapon> <percent> ; where percent is of max ammo or of full charge",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_rounds_total",
	['weapon', 'long'],
	"long",
	"<weapon> <magazine_index> ; returns clip ammo + backpack inventory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_age",
	['weapon'],
	"real",
	"Returns age [0 ... 1] where 0:fully powered, 1:depleted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_age",
	['weapon', 'real'],
	"void",
	"0.0:fully powered, 1.0:depleted",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_lockon_state",
	['weapon'],
	"long",
	"Returns 0:none, 1:tracking, 2:locked",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_lockon_target",
	['weapon', 'boolean', 'boolean'],
	"object",
	"<weapon> <driver_if_vehicle_bool> <gunner_if_vehicle_bool> // returns target object being tracked. if vehicle, optionally returns targeted vehicle's driver or gunner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_trigger_get_charged_fraction",
	['weapon', 'short'],
	"real",
	"<weapon> <trigger_index> ; returns charge 0.0 - 1.0",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_target_designator_show_hud",
	['player'],
	"void",
	"Sets flag to show the target designator hud for a given player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_target_designator_hide_hud",
	[],
	"void",
	"Sets flag to hide the target designator hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_get_target_designator_cooldown_timer",
	['player'],
	"real",
	"Returns the cool down counter for the target designator",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_set_target_designator_cooldown_timer",
	['real'],
	"void",
	"Begins the cool down counter for the target designator for the given time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"weapon_force_end_target_designator_cooldown_timer",
	[],
	"void",
	"Force ends the cool down counter for the target designator",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_weapons_override_projectiles_per_shot",
	['long'],
	"void",
	"Override barrel's projectiles_per_shot. -1 disables override",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_weapons_override_projectile_error_angles",
	['real', 'real', 'real'],
	"void",
	"Override barrel's projectiles error angles (inner, low, high). each of three overrides will be disabled by specifying -1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_weapons_state_trace_filter",
	['string'],
	"void",
	"Gun type name to filter on like 'storm_sticky_detonator'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_never_appears_locked",
	['device', 'boolean'],
	"void",
	"Changes a machine's never_appears_locked flag, but only if paul is a bastard",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_power",
	['device', 'real'],
	"void",
	"Immediately sets the power of a named device to the given value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position_transition_time",
	['device', 'real'],
	"void",
	"Immediately sets the power of a named device to the given value",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_get_power",
	['device'],
	"real",
	"Gets the current power of a named device",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position",
	['device', 'real'],
	"boolean",
	"Set the desired position of the given device (used for devices without explicit device groups)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_get_position",
	['device'],
	"real",
	"Gets the current position of the given device (used for devices without explicit device groups)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position_immediate",
	['device', 'real'],
	"void",
	"Instantaneously changes the position of the given device (used for devices without explicit device groups",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_get",
	['device_group'],
	"real",
	"Returns the desired value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_set",
	['device', 'device_group', 'real'],
	"boolean",
	"Changes the desired value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_set_immediate",
	['device_group', 'real'],
	"void",
	"Instantaneously changes the value of the specified device group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_one_sided_set",
	['device', 'boolean'],
	"void",
	"True makes the given device one-sided (only able to be opened from one direction), false makes it two-sided",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_ignore_player_set",
	['device', 'boolean'],
	"void",
	"True makes the given device ignore the player (won't open for players), false makes it work for the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_ignore_ai_set",
	['device', 'boolean'],
	"void",
	"True makes the given device ignore ai (won't open for ai), false makes it work for ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_operates_automatically_set",
	['device', 'boolean'],
	"void",
	"True makes the given device open automatically when any biped is nearby, false makes it not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_closes_automatically_set",
	['device', 'boolean'],
	"void",
	"True makes the given device close automatically after it has opened, false makes it not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_group_change_only_once_more_set",
	['device_group', 'boolean'],
	"void",
	"True allows a device to change states only once",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_position_track",
	['device', 'string_id', 'real'],
	"boolean",
	"Set the desired position track animation to use (optional interpolation time onto track)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_set_overlay_track",
	['device', 'string_id'],
	"boolean",
	"Set the desired overlay animation to use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_animate_position",
	['device', 'real', 'real', 'real', 'real', 'boolean'],
	"void",
	"Animate the position over time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"device_animate_overlay",
	['device', 'real', 'real', 'real', 'real'],
	"void",
	"Animate the overlay over time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_all_weapons",
	[],
	"void",
	"Drops all weapons near player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_all_vehicles",
	[],
	"void",
	"Drops all vehicles on player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_teleport_to_camera",
	[],
	"void",
	"Teleports player to camera location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage",
	['boolean'],
	"void",
	"Gives the player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheat_active_camouflage_by_player",
	['player', 'boolean'],
	"void",
	"Gives a specific player active camouflage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cheats_load",
	[],
	"void",
	"Reloads the cheats.txt file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_safe",
	['any_tag'],
	"void",
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop",
	['string'],
	"void",
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_variant",
	['string', 'string'],
	"void",
	"Drops the named tag e.g. objects\\vehicles\\banshee\\banshee.vehicle using the specified variant name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_permutation",
	['string', 'string'],
	"void",
	"Drops the named tag e.g. objects\\characters\\brute\\brute.biped using the specified permutation. permutations are specified as a comma-delimited string of region=permutation pairs (e.g. region1=permutation1,region2=permutation2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"update_dropped_tag_permutation",
	['string', 'string'],
	"void",
	"Updates the permutation for a previously dropped tag. permutations are specified as a comma-delimited string of region=permutation pairs (e.g. region1=permutation1,region2=permutation2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_jump_cost_scale",
	['real'],
	"void",
	"Scale pathing cost of jumps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enable",
	['boolean'],
	"void",
	"Turns all ai on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enabled",
	[],
	"boolean",
	"Returns whether ai is turned on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_grenades",
	['boolean'],
	"void",
	"Turns grenade inventory on or off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_enable",
	['boolean'],
	"void",
	"Turn combat dialogue on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_updating_enable",
	['boolean'],
	"void",
	"Enable updating of dialogue tags at runtime, based on stimuli",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_dialogue_enable",
	['boolean'],
	"void",
	"Turn player combat dialogue on/off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_actor_dialogue_enable",
	['ai', 'boolean'],
	"void",
	"Turn combat dialogue on/off for a particular ai type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_actor_dialogue_effect_enable",
	['ai', 'boolean'],
	"void",
	"Turn combat dialogue effects on/off for a particular ai type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_infection_suppress",
	['long'],
	"void",
	"Disable infection for this number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fast_and_dumb",
	['boolean'],
	"void",
	"Turn on/off perception performance hacks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lod_full_detail_actors",
	['short'],
	"void",
	"Change the number of full detail ai characters we are allowed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lod_full_detail_actors",
	[],
	"void",
	"Display the number of full detail ai characters we are allowed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_full_lod",
	['ai', 'boolean'],
	"void",
	"Enables/disables forced full lod mode on specified actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_log_reset",
	[],
	"void",
	"Reset the dialogue log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_log_dump",
	['string'],
	"void",
	"Dump a file of the given name with csv statistics on vocalizations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_object",
	['ai'],
	"object",
	"Returns the unit/object corresponding to the given actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_unit",
	['ai'],
	"unit",
	"Returns the unit/object corresponding to the given actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_squad",
	['ai'],
	"ai",
	"Returns the squad of the given actor. invalid if the given ai is not an actor-type (i.e. is itself a squad or squad group or task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_turret_ai",
	['ai', 'short'],
	"ai",
	"Returns an the ai controlling the nth turret attached to the given ai (or its vehicle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_random_smart_point",
	['point_reference', 'real', 'real', 'real'],
	"point_reference",
	"Returns a point in the given point set that a player is probably going to be able to see. args are [point set], [min distance], [max distance], [angle-from-forward], all relative to the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_nearest_point",
	['object', 'point_reference'],
	"point_reference",
	"Returns the nearest point in the given point set to the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_point_count",
	['point_reference'],
	"long",
	"Returns the number of points in the given point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_point_set_get_point",
	['point_reference', 'short'],
	"point_reference",
	"Returns nth point in the point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_debug_dump_behavior_tree",
	['boolean'],
	"void",
	"Debug, dont use!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_equipment_drop_rate",
	['ai', 'real'],
	"void",
	"Sets chance (between 0.0 and 1.0) that ai will drop equipment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place",
	['ai'],
	"void",
	"Places the specified squad on the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_long",
	['long'],
	"void",
	"Places the specified squad (using a long) on the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place",
	['ai', 'short'],
	"void",
	"Places the given number of members of the specified squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_in_limbo",
	['ai'],
	"void",
	"Places the specified squad on the map in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_in_limbo",
	['ai', 'short'],
	"void",
	"Places the given number of members of the specified squad in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_in_vehicle",
	['ai', 'ai'],
	"void",
	"Places the specified squad (1st arg) on the map in the vehicles belonging to the specified vehicle squad (2nd arg)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_cannot_die",
	['ai', 'boolean'],
	"void",
	"Ai cannot die from damage (as opposed to by scripting)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vitality_pinned",
	['ai'],
	"boolean",
	"Returns true if the ai's units are all vitality pinned (see object_vitality_pinned)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave",
	['long', 'ai'],
	"void",
	"Places the specified wave name into squads defined as part of the given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave",
	['long', 'ai', 'long'],
	"void",
	"Places the given number of squads from the specified wave name into squads defined as part of the given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave_in_limbo",
	['long', 'ai'],
	"void",
	"Places the specified wave name into squads defined as part of the given squad group in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_wave_in_limbo",
	['long', 'ai', 'long'],
	"void",
	"Places the given number of squads from the specified wave name into squads defined as part of the given squad group in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_with_shards",
	['ai'],
	"long",
	"Places the specified squad on the map using forerunner shards",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_with_shards",
	['ai', 'short'],
	"long",
	"Places the given number of members of the specified squad using forerunner shards",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_with_birth",
	['ai'],
	"long",
	"Places the specified squad on the map using forerunner birth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_internal_query_clump_for_target",
	['ai'],
	"void",
	"Internal use only. post shard spawn targeting update from nearby bishops",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_clump",
	['ai', 'short'],
	"void",
	"Force the given ai into a specific clump",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_designer_clump_perception_range",
	['real'],
	"void",
	"Override the maximum perception range of designer specified clumps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_index_from_spawn_formation",
	['ai', 'string_id'],
	"ai",
	"Create an ai index from the given squad and spawn formation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_resurrect",
	['object'],
	"void",
	"Resurrect the specified mission critical ai character",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kill",
	['ai'],
	"void",
	"Instantly kills the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kill_silent",
	['ai'],
	"void",
	"Instantly and silently (no animation or sound played) kills the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kill_no_statistics",
	['ai'],
	"void",
	"Instantly and silently (no animation or sound played) kills the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase",
	['ai'],
	"void",
	"Erases the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase_out_of_context",
	[],
	"void",
	"Erases ai that have been made inactive because the bsp unloaded under them",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase_all",
	[],
	"void",
	"Erases all ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_disposable",
	['ai', 'boolean'],
	"void",
	"Enables or disables automatic garbage collection for actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_select",
	['ai'],
	"void",
	"Selects the specified squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_deselect",
	[],
	"void",
	"Clears the selected encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_deaf",
	['ai', 'boolean'],
	"void",
	"Enables or disables hearing for actors in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_blind",
	['ai', 'boolean'],
	"void",
	"Enables or disables sight for actors in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_weapon_up",
	['ai', 'boolean'],
	"void",
	"Force actor to hold their weapon up, instead of lowering it when idle. this does not cause them to draw their weapon if stowed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_flood_disperse",
	['ai', 'ai'],
	"void",
	"Disperese a flood encounter, stimulating the various forms to break down into infections and transition to the new objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_add_navpoint",
	['ai', 'boolean'],
	"void",
	"Add/remove hud navpoint to the actor or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see",
	['ai', 'ai'],
	"void",
	"Make one squad magically aware of another",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_magically_see_object",
	['ai', 'object'],
	"void",
	"Make a squad magically aware of a particular object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_active_camo",
	['ai', 'boolean'],
	"void",
	"Turn on active camoflage on actor/squad/squad-group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_suppress_combat",
	['ai', 'boolean'],
	"void",
	"Turn on/off combat suppression on actor/squad/squad-group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_engineer_explode",
	['ai'],
	"void",
	"Register an explosion stimulus with all specified actors, causing engineers to explode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_grunt_kamikaze",
	['ai'],
	"void",
	"Register a kamikaze stimulus with all specified actors, causing grunts to go wild",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_flee_target",
	['ai', 'object'],
	"void",
	"Makes specified ai flee from the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_kamikaze_disable",
	['ai', 'boolean'],
	"void",
	"Disable kamikaze behavior on specified ai units when set to true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_enumerate_immigrants",
	['ai', 'boolean'],
	"void",
	"If someone migrates (or simply changes) into this squad, consider him a full member of the squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate",
	['ai', 'ai'],
	"void",
	"Makes all or part of an encounter move to another encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate_persistent",
	['ai', 'ai'],
	"void",
	"Makes all or part of an encounter move to another encounter, and all script commands will function on the migrated squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance",
	['team', 'team'],
	"void",
	"Creates an allegiance between two teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance_remove",
	['team', 'team'],
	"void",
	"Destroys an allegiance between two teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance_break",
	['team', 'team'],
	"void",
	"Fake a betrayal incident between two teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_braindead",
	['ai', 'boolean'],
	"void",
	"Makes a group of actors braindead, or restores them to life (in their initial state)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_braindead_by_unit",
	['object_list', 'boolean'],
	"void",
	"Makes a list of objects braindead, or restores them to life. if you pass in a vehicle index, it makes all actors in that vehicle braindead (including any built-in guns)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_disregard",
	['object_list', 'boolean'],
	"void",
	"If true, forces all actors to completely disregard the specified units, otherwise lets them acknowledge the units again",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_disregard_orphans",
	['ai'],
	"void",
	"The given ai will discard all orphan props, terminating search",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_prefer_target",
	['object_list', 'boolean'],
	"void",
	"If true, *all* enemies will prefer to attack the specified units. if false, removes the preference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_prefer_target_team",
	['ai', 'team'],
	"void",
	"The given ai will prefer the indicated team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_prefer_target_ai",
	['ai', 'ai', 'boolean'],
	"void",
	"The given ai (actor, squad, task, etc.) will prefer the given other ai (actor, squad, task, etc.)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_targeting_group",
	['ai', 'short'],
	"void",
	"Set the ai to only target other guys of targeting group x",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_targeting_group",
	['ai', 'short', 'boolean'],
	"void",
	"Set the ai to only target other guys of targeting group x (true/false whether the player should also be targeted)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_starting_location_if_outside_bsp",
	['ai'],
	"void",
	"Please use ai_teleport_to_spawn_point_if_outside_bsp instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport_to_spawn_point_if_outside_bsp",
	['ai'],
	"void",
	"Teleports a group of actors to the spawn points of their current squad(s) if they are currently outside the world",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_teleport",
	['ai', 'point_reference'],
	"void",
	"Teleports the given squad to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_bring_forward",
	['object', 'real'],
	"void",
	"Teleports the given mission critical ai character to the current encounter, if beyond the given range from a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_advance_immediate",
	['ai'],
	"void",
	"Order advance for actor/squad/squad-group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_renew",
	['ai'],
	"void",
	"Refreshes the health and grenade count of a group of actors, so they are as good as new",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_active",
	['ai', 'boolean'],
	"void",
	"Forces an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_force_active_by_unit",
	['unit', 'boolean'],
	"void",
	"Forces a named actor that is not in an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enter_limbo",
	['ai'],
	"void",
	"Puts the ai in limbo state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_exit_limbo",
	['ai'],
	"void",
	"Remove the give ai from limbo, generally induced by spawning in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_playfight",
	['ai', 'boolean'],
	"void",
	"Sets an encounter to be playfighting or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_reconnect",
	[],
	"void",
	"Reconnects all ai information to the current structure bsp (use this after you create encounters or command lists in sapien, or place new firing points or command list points)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_berserk",
	['ai', 'boolean'],
	"void",
	"Forces a group of actors to start or stop berserking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_team",
	['ai', 'team'],
	"void",
	"Makes an encounter change to a new team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allow_dormant",
	['ai', 'boolean'],
	"void",
	"Either enables or disables automatic dormancy for a group of actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allow_resurrect",
	['ai', 'boolean'],
	"void",
	"Enable / disable resurrection logic on specified character",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_swap_weapons",
	['ai'],
	"void",
	"Swaps primary / secondary weapons on specified ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_is_shooting",
	['ai'],
	"boolean",
	"Returns true if any character in specified squad/spawn point is currently firing his weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_is_attacking",
	['ai'],
	"boolean",
	"Returns whether a platoon is in the attacking mode (or if an encounter is specified, returns whether any platoon in that encounter is attacking)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fighting_count",
	['ai'],
	"long",
	"Return the number of actors that are fighting in a squad or squad_group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_living_count",
	['ai'],
	"long",
	"Return the number of living actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_in_limbo_count",
	['ai'],
	"long",
	"Return the number of living actors in the specified encounter and/or squad that are in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_not_in_limbo_count",
	['ai'],
	"long",
	"Return the number of living actors in the specified encounter and/or squad that are not in limbo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_living_fraction",
	['ai'],
	"real",
	"Return the fraction [0-1] of living actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_in_vehicle_count",
	['ai'],
	"long",
	"Return the number of living actors in the specified encounter and/or squad who are currently in a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_body_count",
	['ai'],
	"long",
	"Return the number of actors who have died in the completiong of the given objective/task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_strength",
	['ai'],
	"real",
	"Return the current strength (average body vitality from 0-1) of the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_swarm_count",
	['ai'],
	"long",
	"Return the number of swarm actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_nonswarm_count",
	['ai'],
	"long",
	"Return the number of non-swarm actors in the specified encounter and/or squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_actors",
	['ai'],
	"object_list",
	"Converts an ai reference to an object list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allegiance_broken",
	['team', 'team'],
	"boolean",
	"Returns whether two teams have an allegiance that is currently broken by traitorous behavior",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_spawn_count",
	['ai'],
	"short",
	"Returns the number of actors spawned in the given squad or squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_get_ai",
	['object'],
	"ai",
	"Returns the ai attached to this object, if any",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_particleize",
	['object', 'any_tag'],
	"void",
	"Particleize object, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_particleize_to_marker",
	['object', 'object', 'string_id', 'any_tag'],
	"void",
	"Particleize object, to-object, to-marker, particlemane-tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_particleize_to_area",
	['object', 'ai', 'any_tag'],
	"void",
	"Particleize object, to spawn_point, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_particleize",
	['ai', 'any_tag'],
	"void",
	"Particleize ai, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_particleize_dead_to_area",
	['ai', 'real', 'any_tag'],
	"void",
	"Particleize dead bipeds to an area spawn_point, radius, tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_particleize_clear_area",
	[],
	"void",
	"Clear target set from dead_to_area",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_task",
	['ai', 'string_id', 'string_id'],
	"boolean",
	"Sets the current task of the current task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_objective",
	['ai', 'string_id'],
	"boolean",
	"Sets the squad's current objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_task_status",
	['ai'],
	"short",
	"Returns the status of the given objective/task. see ai_task_status_<tab> for return codes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_task_condition",
	['ai', 'boolean'],
	"boolean",
	"Latches the task condition true or false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_leadership",
	['ai'],
	"boolean",
	"Returns whether a squad or task has a leader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_leadership_all",
	['ai'],
	"boolean",
	"Returns whether a task or any of its children has a leader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_task_count",
	['ai'],
	"short",
	"Returns the living count of the ai in the given task or any of its children",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_reset_objective",
	['ai'],
	"void",
	"Completely reset the given objective, task or task hierarchy (if passed a gate task)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_patrol_objective_disallow",
	['ai', 'boolean'],
	"void",
	"Disallow the selection of an objective by any squad patrol",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_get_objective",
	['ai'],
	"string_id",
	"Get the objective assigned to an ai as a string id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_place_cue",
	['string_id'],
	"void",
	"Place the named ai cue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_remove_cue",
	['string_id'],
	"void",
	"Remove the named ai cue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_paths_all",
	[],
	"void",
	"Turns on raw, smoothed, avoided paths and avoidance obstacles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_evaluations_shading_none",
	[],
	"void",
	"Render no fp evaluation shading",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_evaluations_shading_all",
	[],
	"void",
	"Render all fp evaluation shading",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_evaluations_shading",
	['firing_point_evaluator'],
	"void",
	"Add a specific fp evaluation shading to render",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_render_stationkeeping",
	['boolean'],
	"void",
	"Render stationkeeping debug",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_activity_set",
	['ai', 'string_id'],
	"void",
	"Set the given activity running on the given ai(s)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_activity_abort",
	['ai'],
	"void",
	"Aborts the activities running on the given ai(s)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_set_team",
	['object', 'team'],
	"void",
	"Flag an object as being owned by a certain team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_set_targeting_bias",
	['object', 'real'],
	"void",
	"Sets the targeting preference for this object in relation to other equal targets [-1, 1]",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_set_targeting_ranges",
	['object', 'real', 'real'],
	"void",
	"Sets override weapon ranges for enemies attacking this object <min> <max>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_enable_targeting_from_vehicle",
	['object', 'boolean'],
	"void",
	"If enabled, actors in vehicles are not allowed to target this object <object> <true/false>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_object_enable_grenade_attack",
	['object', 'boolean'],
	"void",
	"If disabled, actors cannot attack the object with grenades <object> <true/false>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get",
	['ai'],
	"vehicle",
	"Returns the vehicle that the given actor is in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_starting_location",
	['ai'],
	"vehicle",
	"Please start using ai_vehicle_get_from_spawn_point instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_spawn_point",
	['ai'],
	"vehicle",
	"Returns the vehicle that was spawned at the given spawn point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_squad_count",
	['ai'],
	"short",
	"Returns the number of vehicles in the given squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_from_squad",
	['ai', 'short'],
	"vehicle",
	"Returns the nth vehicle from the given squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_reserve_seat",
	['vehicle', 'unit_seat_mapping', 'boolean'],
	"boolean",
	"Reserves the given seat on the given vehicle (so that ai may not enter it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_reserve",
	['vehicle', 'boolean'],
	"boolean",
	"Reserves the given vehicle (so that ai may not enter it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_get_vehicle_squad",
	['unit'],
	"ai",
	"Returns the squad (if any) of the vehicle the player is riding in (note, the argument is a unit)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_count",
	['ai'],
	"short",
	"Returns the number of vehicles being driven / ridden by the actors in the given squad/squad-group/task/etc",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_carrying_player",
	['ai'],
	"boolean",
	"Returns whether any of the given ai are in a vehicle with the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_in_vehicle",
	['vehicle'],
	"boolean",
	"Returns whether any players are in the given vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_get_driver",
	['vehicle'],
	"ai",
	"Returns the ai driver for a given vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_needs_vehicle",
	['player'],
	"boolean",
	"Returns if the given player needs a vehicle at the moment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_any_needs_vehicle",
	[],
	"boolean",
	"Returns if any player needs a vehicle at the moment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter",
	['ai', 'unit', 'unit_seat_mapping'],
	"void",
	"Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter",
	['ai', 'unit'],
	"void",
	"Tells a group of actors to get into a vehicle... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter_immediate",
	['ai', 'unit', 'unit_seat_mapping'],
	"void",
	"The given group of actors is snapped into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_enter_immediate",
	['ai', 'unit'],
	"void",
	"The given group of actors is snapped into a vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enter_squad_vehicles",
	['ai'],
	"short",
	"Instructs the ai in the given squad to get in all their vehicles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_exit",
	['ai', 'unit_seat_mapping'],
	"void",
	"Tells a group of actors to get out of any vehicles that they are in (if their seat matches the substring)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_vehicle_exit",
	['ai'],
	"void",
	"Tells a group of actors to get out of any vehicles that they are in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_overturned",
	['vehicle'],
	"boolean",
	"Returns true if the vehicle is overturned",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_flip",
	['vehicle'],
	"void",
	"Flips an overturned vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_group_get_squad",
	['ai', 'short'],
	"ai",
	"Returns the nth squad from a given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_group_get_squad_count",
	['ai'],
	"short",
	"Returns the number of squads in a given squad group",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_squad_patrol_enable",
	['string_id', 'boolean'],
	"void",
	"Enable/disable a squad patrol",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_combat_status",
	['ai'],
	"short",
	"Returns the highest integer combat status in the given squad-group/squad/actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_start",
	['string_id'],
	"boolean",
	"The flock starts producing boids",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_stop",
	['string_id'],
	"boolean",
	"The flock stops producing boids",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_create",
	['string_id'],
	"boolean",
	"Create the given flock",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_delete",
	['string_id'],
	"boolean",
	"Delete the given flock",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destroy",
	['string_id'],
	"boolean",
	"Destroy the given flock, killing all members randomly over time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_definition_set",
	['string_id', 'any_tag'],
	"boolean",
	"Set the definition of the given flock to the given tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_unperch",
	['string_id'],
	"void",
	"Cause the given flock to unperch (if it is perched)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_set_targeting_group",
	['string_id', 'short'],
	"void",
	"Set the flock to only target other guys in targeting group x",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destination_set_enabled",
	['string_id', 'string_id', 'boolean'],
	"void",
	"Sets the enabled flag on the flock destination",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destination_set_position",
	['string_id', 'string_id', 'point_reference'],
	"void",
	"Sets the position of a flock destination to the location of an ai point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flock_destination_copy_position",
	['string_id', 'string_id', 'string_id'],
	"void",
	"Sets the position of one flock destination to the position of another flock destination",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"drop_ai",
	['string', 'string'],
	"void",
	"Drop an ai with the given weapon at the current camera position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_create_runtime_squad",
	['string'],
	"boolean",
	"Create a new squad definition entry with the given name. arg: <squad_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_create_runtime_point_set",
	['string'],
	"boolean",
	"Enables mantini to create new point sets in memory. arg: <point_set_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_runtime_point_to_set",
	['string', 'string', 'real', 'real', 'real', 'real'],
	"boolean",
	"Enables mantini to add a point to an in memory point set.  arg: <point_set_name> <point_name> <x> <y> <yaw> <pitch>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_runtime_point_to_set_from_camera",
	['string', 'string', 'real', 'real'],
	"boolean",
	"Enables mantini to add a point to an in memory point set along the current camera fwd collision point.  arg: <point_set_name> <point_name> <yaw> <pitch>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_starting_location_to_squad",
	['string', 'string', 'long', 'point_reference'],
	"boolean",
	"Enables mantini to add a spawn point to a squad identified by an ai point.  arg: <squad_name> <starting loc name> <cell_index> <pointref>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_starting_location_to_squad_from_camera",
	['string', 'string', 'long', 'real'],
	"boolean",
	"Enables mantini to add a spawn point to a squad identified from the camera position.  arg: <squad_name> <starting loc name> <cell_index> <offset in wus>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_add_cell_to_runtime_squad",
	['string', 'string'],
	"long",
	"Add a character to a runtime squad. arg: <squad_name> <character tag>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_get_runtime_squad_cell_count",
	['string'],
	"long",
	"Get the cell count of a runtime squad. arg: <squad_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_squad_team",
	['string', 'team'],
	"boolean",
	"Set the team for a runtime squad. arg: <squad_name> <team>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_spawn_point_weapons",
	['ai', 'string', 'string'],
	"boolean",
	"Set primary and secondary weapon for a spawn point. arg: <spawn_point> <primary weapon tag> <secondary weapon tag>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_spawn_point_vehicle",
	['ai', 'string'],
	"boolean",
	"Set vehicle for a spawn point. arg: <spawn_point> <vehicle tag>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_spawn_point_variants",
	['ai', 'string_id', 'string_id'],
	"boolean",
	"Set actor and vehicle variants for spawn point. arg: <spawn_point> <actor variant> <vehicle variant>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_set_squad_cell_spawn_count",
	['string', 'long', 'long'],
	"boolean",
	"Set cell spawn count. arg: <squad name> <cell index> <spawn count>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_clear_runtime_squads",
	[],
	"boolean",
	"Clears all runtime created squads. returns false if there were none to clear",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_remove_pointset",
	['string'],
	"boolean",
	"Clears all point sets after a pointset that contains the specified substring. returns false if there were none to clear. arg: <substring to search for in pointset name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mantini_get_loaded_map_name",
	[],
	"string",
	"Returns the name of the currently loaded map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_verify_tags",
	[],
	"void",
	"Verifies state of ai-related tags (e.g. orders, squads, zones, etc.)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_wall_lean",
	['ai'],
	"boolean",
	"Makes the actor lean against a wall right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_fire_dialogue_event",
	['ai', 'string', 'object'],
	"void",
	"Runs a dialogue event on actor closest to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_vocalization",
	['string_id'],
	"void",
	"Runs a dialogue event on actor closest to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_vocalization_on_team",
	['string_id', 'team'],
	"void",
	"Runs a dialogue event on actor closest to a player that's allied with the given team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line",
	['ai', 'ai_line'],
	"short",
	"Play the given mission dialogue line on the given ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_at_player",
	['ai', 'ai_line'],
	"short",
	"Play the given mission dialogue line on the given ai, directing the ai's gaze at the nearest visible player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object",
	['object', 'ai_line'],
	"short",
	"Play the given mission dialogue line on the given object (uses first available variant)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_object_for_team",
	['object', 'ai_line', 'mp_team'],
	"short",
	"Play the given mission dialogue line on the given object (uses first available variant) if anyone on the local box is on the specified team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_point_set",
	['string_id', 'point_reference', 'short'],
	"short",
	"Play the given line on the n closest point to players in the given point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_play_line_on_point_set",
	['string_id', 'point_reference', 'short', 'string_id'],
	"short",
	"Play the given line (with the given 3-letter variant) on the n closest point to players in the given point set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_time_pause",
	['boolean'],
	"void",
	"Pause meta game time, while paused your completion multiplier stops going down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_points",
	['player', 'long'],
	"void",
	"Award bonus metagame points to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_award_skull",
	['player', 'skull'],
	"void",
	"Award a skull to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_enabled",
	[],
	"boolean",
	"True if the metagame is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_survival_enabled",
	[],
	"boolean",
	"True if survival mode is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_lines",
	[],
	"short",
	"Cycles through ai line-spray modes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dialogue_break_on_vocalization",
	['string_id'],
	"void",
	"Break when the following vocalization is chosen for utterance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_allocate_station",
	['string_id'],
	"void",
	"Grab a station slot and assign it the specified name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_assign_actor_station",
	['string_id', 'ai'],
	"void",
	"Tell actor to maintain station",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_release_station",
	['string_id'],
	"void",
	"Release station",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_station_on_object",
	['string_id', 'object'],
	"void",
	"Base station in object reference frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_station_set_bounds",
	['string_id', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Station boundary min max pairs for range, yaw, pitch. range in wu, angles in degrees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_station_predict_time",
	['string_id', 'real', 'real', 'real'],
	"void",
	"Project intercepts to station this far when moving slow to fast (fast speed), (time at speed 0), (time at fast speed)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_capture_allegiance",
	['object', 'object'],
	"void",
	"Squad containing first unit takes the team of the unit in the second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_path_ignore_object_obstacle",
	['ai', 'object'],
	"void",
	"Tells the actor to ignore pathfinding obstacles associated with object <ai> <object>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_path_clear_ignore_object_obstacle",
	['ai'],
	"void",
	"Tells the actor to stop ignoring the obstacle <ai>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_test",
	['string_id'],
	"void",
	"Starts a performance with the given name, spawns needed actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_folder_activate",
	['folder'],
	"void",
	"Activates inactive performances inside a given folder name, waits for actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_folder_deactivate",
	['folder'],
	"void",
	"Deactivates active performances inside a given folder name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_activate",
	['string_id'],
	"void",
	"Activates an inactive performance with a given name, waits for actors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_setup_and_begin",
	['string_id', 'string_id', 'real'],
	"boolean",
	"Finds all of the actors needed for the performance, and then starts the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_new",
	['string_id', 'boolean'],
	"long",
	"Creates a new instance of a performance given a performance definition name. if last argument true, allows duplicates",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cast_squad_in_performance",
	['long', 'ai'],
	"void",
	"Finds and assigns roles for actors in the given squad in a performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_begin",
	['long'],
	"void",
	"Starts the script for a performance if all of the critical roles have been cast",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_kill_by_name",
	['string_id'],
	"void",
	"Kills any performance with the given name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_kill_by_ai",
	['ai'],
	"void",
	"Kills any performance that has cast an ai from the given squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_fake_task_transition",
	['string_id', 'string_id'],
	"void",
	"Unblocks an actor waiting looping animation that's waiting on a task transition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_play_line_by_id",
	['short'],
	"void",
	"Play a line (referenced by line id) in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_play_line",
	['string_id'],
	"void",
	"Play a line (referenced by name) in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_actor_by_index",
	['short'],
	"ai",
	"Get the actor in the given participant slot of a performace",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_actor",
	['string_id'],
	"ai",
	"Get the actor who playing the given named role in a performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_actor_count",
	[],
	"short",
	"Get the total number of actors currently in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_role_count",
	[],
	"short",
	"Get the total number of roles in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_line_count",
	[],
	"short",
	"Get the total number of lines in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"performance_get_last_played_line_index",
	[],
	"short",
	"Get the index of the last line played in the performance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"thespian_performance_is_blocked",
	[],
	"boolean",
	"Returns true if a line is executing that is blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"actor_from_performance",
	['long', 'string_id'],
	"ai",
	"Get a specified actor from a performance given by its runtime index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_add_fireteam_squad",
	['unit', 'ai'],
	"void",
	"Adds the given squad to the given player's fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_remove_fireteam_squad",
	['unit', 'ai'],
	"void",
	"Removes the given squad from the given player's fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_set_fireteam_max",
	['unit', 'short'],
	"void",
	"Sets the maximum number of actors allowed in the players fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_set_fireteam_no_max",
	['unit'],
	"void",
	"Sets the maximum number of actors allowed in the players fire team to unlimited",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_player_set_fireteam_max_squad_absorb_distance",
	['unit', 'real'],
	"void",
	"Sets the maximum distance at which this squad can absorb nearby squads",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_fireteam_absorber",
	['ai', 'boolean'],
	"void",
	"Enables or disables fireteam absortion for a given squad in the specified encounter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_fireteam_fallback_squad",
	['unit', 'ai'],
	"void",
	"Sets the squad that ai will migrate into if the player dies",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_is_in_fireteam",
	['ai'],
	"boolean",
	"Returns true if the given ai is in a fire team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_run_command_script",
	['ai', 'ai_command_script'],
	"void",
	"Causes the specified actor(s) to start executing a command script immediately (discarding any other command scripts in the queue)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_queue_command_script",
	['ai', 'ai_command_script'],
	"void",
	"Add a command script onto the end of an actor's command script queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stack_command_script",
	['ai', 'ai_command_script'],
	"void",
	"Push a command script to the top of the actor's command script queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_cast",
	['ai', 'boolean', 'short', 'string_id'],
	"boolean",
	"Cast 1 actor for a vignette (at the given priority, higher = more important)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_cast",
	['ai', 'boolean', 'short', 'string_id', 'string_id'],
	"boolean",
	"Cast 2 actors for a vignette (at the given priority, higher = more important)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_cast",
	['ai', 'boolean', 'short', 'string_id', 'string_id', 'string_id'],
	"boolean",
	"Cast 3 actors for a vignette (at the given priority, higher = more important)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_cast",
	['ai', 'boolean', 'short', 'string_id', 'string_id', 'string_id', 'string_id'],
	"boolean",
	"Cast 4 actors for a vignette (at the given priority, higher = more important)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vs_cast",
	['ai', 'boolean', 'short', 'string_id', 'string_id', 'string_id', 'string_id', 'string_id'],
	"boolean",
	"Cast 5 actors for a vignette (at the given priority, higher = more important)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_role",
	['short'],
	"ai",
	"Returns the given member of the cast (as per more recent vs_cast call)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_alert",
	['boolean'],
	"void",
	"Command script ends prematurely when actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_damage",
	['boolean'],
	"void",
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_combat_status",
	['short'],
	"void",
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_vehicle_exit",
	['boolean'],
	"void",
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_alert",
	['boolean'],
	"void",
	"Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_alert",
	['ai', 'boolean'],
	"void",
	"Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_damage",
	['boolean'],
	"void",
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_damage",
	['ai', 'boolean'],
	"void",
	"Command script ends prematurely when actor is damaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_combat_status",
	['short'],
	"void",
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_combat_status",
	['ai', 'short'],
	"void",
	"Command script ends prematurely when actor's combat status rises to given level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_vehicle_exit",
	['boolean'],
	"void",
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_abort_on_vehicle_exit",
	['ai', 'boolean'],
	"void",
	"Command script ends prematurely when actor gets out of its vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_command_script_running",
	['ai', 'ai_command_script'],
	"boolean",
	"Returns true if the ai is running the command script in question",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_command_script_attached",
	['ai', 'ai_command_script'],
	"boolean",
	"Returns true if the command script is in the ai's cs queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_number_queued",
	['ai'],
	"short",
	"Returns the number of queued command scripts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_moving",
	[],
	"void",
	"Returns true if the actor is currently following a path",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['point_reference'],
	"void",
	"Flies the actor to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Flies the actor to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['point_reference', 'real'],
	"void",
	"Flies the actor to the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	"Flies the actor to the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['point_reference', 'point_reference'],
	"void",
	"Flies the actor to the given point and orients him in the appropriate direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['ai', 'boolean', 'point_reference', 'point_reference'],
	"void",
	"Flies the actor to the given point and orients him in the appropriate direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['point_reference', 'point_reference', 'real'],
	"void",
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['ai', 'boolean', 'point_reference', 'point_reference', 'real'],
	"void",
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_dock",
	['point_reference', 'point_reference', 'real'],
	"void",
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance) and stops there. best used at very short range",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_to_and_face",
	['ai', 'boolean', 'point_reference', 'point_reference', 'real'],
	"void",
	"Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['point_reference'],
	"void",
	"Flies the actor through the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Flies the actor through the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['point_reference', 'real'],
	"void",
	"Flies the actor through the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_by",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	"Flies the actor through the given point (within the given tolerance)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_over_object",
	['object', 'real', 'real'],
	"void",
	"Flies by the point that is the given height above the object (within the given tolerance measured on the ground)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_fly_over_object",
	['ai', 'boolean', 'object', 'real', 'real'],
	"void",
	"Flies by the point that is the given height above the object (within the given tolerance measured on the ground)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['point_reference'],
	"void",
	"Moves the actor to a specified point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Moves the actor to a specified point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['point_reference', 'real'],
	"void",
	"Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	"Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['point_reference', 'point_reference'],
	"void",
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['ai', 'boolean', 'point_reference', 'point_reference'],
	"void",
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['point_reference', 'point_reference', 'real'],
	"void",
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_by",
	['ai', 'boolean', 'point_reference', 'point_reference', 'real'],
	"void",
	"Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_face",
	['point_reference', 'point_reference'],
	"void",
	"Moves the actor to a specified point and has him face the second point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_face",
	['ai', 'boolean', 'point_reference', 'point_reference'],
	"void",
	"Moves the actor to a specified point and has him face the second point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_posture",
	['point_reference', 'string_id'],
	"void",
	"Actor moves to the point and performs a posture once there",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_and_posture",
	['ai', 'boolean', 'point_reference', 'string_id'],
	"void",
	"Actor moves to the point and performs a posture once there",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_attach_to_spline",
	['string_id'],
	"void",
	"For use in flying vehicles: set this vehicle to pathfind using the designated spline",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_attach_to_spline",
	['ai', 'boolean', 'string_id'],
	"void",
	"For use in flying vehicles: set this vehicle to pathfind using the designated spline",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_nearest",
	['point_reference'],
	"void",
	"Given a point set, ai goes toward the nearest point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_nearest",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Given a point set, ai goes toward the nearest point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_in_direction",
	['real', 'real', 'real'],
	"void",
	"Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_in_direction",
	['ai', 'boolean', 'real', 'real', 'real'],
	"void",
	"Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['object'],
	"void",
	"Move in the direction of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['ai', 'boolean', 'object'],
	"void",
	"Move in the direction of the given object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['object', 'boolean'],
	"void",
	"Move in the direction of the given object (and melee the target or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards",
	['ai', 'boolean', 'object', 'boolean'],
	"void",
	"Move in the direction of the given object (and melee the target or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards_point",
	['point_reference', 'real'],
	"void",
	"Move to within the given radius of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_move_towards_point",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	"Move to within the given radius of the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_to_point",
	['point_reference'],
	"void",
	"Phase to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_to_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Phase to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_in",
	[],
	"void",
	"Play phase in animation. return instantly",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_in",
	['ai', 'boolean'],
	"void",
	"Play phase in animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_phase_in_blocking",
	[],
	"void",
	"Play phase in animation and block until complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_leap_to_point",
	['point_reference'],
	"void",
	"Leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_leap_to_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_oriented_leap_to_point",
	['point_reference'],
	"void",
	"Oriented_leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_oriented_leap_to_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Oriented_leap to the given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_to",
	['point_reference', 'real'],
	"void",
	"A swarm swarms towards the point (or prontrtroint set) in question, the individual forms stopping when they get within the given radius",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_to",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	"A swarm swarms towards the point (or point set) in question, the individual forms stopping when they get within the given radius",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_from",
	['point_reference', 'long'],
	"void",
	"A swarm swarms away from the point in question, going at least the given distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_swarm_from",
	['ai', 'boolean', 'point_reference', 'real'],
	"void",
	"A swarm swarms away from the point in question, going at least the given distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_pause",
	['real'],
	"void",
	"The actor does nothing for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_pause",
	['ai', 'boolean', 'real'],
	"void",
	"The actor does nothing for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_grenade",
	['point_reference', 'short'],
	"void",
	"Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gcs_renade",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	"Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_use_equipment",
	['real'],
	"void",
	"Actor uses their current equipment for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_use_equipment",
	['ai', 'boolean', 'real'],
	"void",
	"Actor uses their current equipment for the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump",
	['real', 'real'],
	"void",
	"Actor jumps in direction of angle at the given velocity (angle, velocity)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump",
	['ai', 'boolean', 'real', 'real'],
	"void",
	"Actor jumps in direction of angle at the given velocity (angle, velocity)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump_to_point",
	['real', 'real'],
	"void",
	"Actor jumps with given horizontal and vertical velocity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_jump_to_point",
	['ai', 'boolean', 'real', 'real'],
	"void",
	"Actor jumps with given horizontal and vertical velocity",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vocalize",
	['short'],
	"void",
	"Actor emits vocalization of given type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vocalize",
	['ai', 'boolean', 'short'],
	"void",
	"Actor emits vocalization of given type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['sound'],
	"void",
	"Actor plays an impulse sound and the atom blocks until it is complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['ai', 'boolean', 'sound'],
	"void",
	"Cs_actor plays an impulse sound and the atom blocks until it is complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['sound', 'real'],
	"void",
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['ai', 'boolean', 'sound', 'real'],
	"void",
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['sound', 'real', 'real'],
	"void",
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_sound",
	['ai', 'boolean', 'sound', 'real', 'real'],
	"void",
	"Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length, at the given volume (0..1)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action",
	['point_reference', 'short'],
	"void",
	"Actor plays an ai action towards the given point. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action",
	['ai', 'boolean', 'point_reference', 'short'],
	"void",
	"Actor plays an ai action towards the given point. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_object",
	['object', 'short'],
	"void",
	"Actor plays an ai action towards the given object. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_object",
	['ai', 'boolean', 'object', 'short'],
	"void",
	"Actor plays an ai action towards the given object. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_player",
	['short'],
	"void",
	"Actor plays an ai action towards the nearest_player. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_action_at_player",
	['ai', 'boolean', 'short'],
	"void",
	"Actor plays an ai action towards the nearest_player. ai_action_<tab> to see action options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['animation_graph', 'string_id', 'boolean'],
	"void",
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['ai', 'boolean', 'animation_graph', 'string_id', 'boolean'],
	"void",
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	"Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation",
	['ai', 'boolean', 'animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	"Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['animation_graph', 'string_id', 'boolean'],
	"void",
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['ai', 'boolean', 'animation_graph', 'string_id', 'boolean'],
	"void",
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_death",
	['ai', 'boolean', 'animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	"Starts a custom animation playing on the actor (interpolates into animation if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['animation_graph', 'string_id', 'boolean'],
	"void",
	"Starts a looping custom animation playing on the actor (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['ai', 'animation_graph', 'string_id', 'boolean'],
	"void",
	"Starts a looping custom animation playing on the actor (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	"Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_custom_animation_loop",
	['ai', 'animation_graph', 'string_id', 'boolean', 'point_reference'],
	"void",
	"Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is true) non-blocking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_line",
	['ai_line'],
	"void",
	"Play the named line in the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_play_line",
	['ai', 'boolean', 'ai_line'],
	"void",
	"Play the named line in the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_die",
	['short'],
	"void",
	"Actor dies in specified manner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_die",
	['ai', 'boolean', 'short'],
	"void",
	"Actor dies in specified manner",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_deploy_turret",
	['point_reference'],
	"void",
	"Deploy a turret at the given script point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_deploy_turret",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Deploy a turret at the given script point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach",
	['object', 'real', 'real', 'real'],
	"void",
	"(approach <object> <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach",
	['ai', 'boolean', 'object', 'real', 'real', 'real'],
	"void",
	"(approach <object> <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_player",
	['real', 'real', 'real'],
	"void",
	"(approach player <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_player",
	['ai', 'boolean', 'real', 'real', 'real'],
	"void",
	"(approach player <distance - how close i want to get> <max-distance  - start approaching when target is within this range> <follow-distance - give up when target is outside this range>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['vehicle'],
	"void",
	"Actor gets in the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['ai', 'boolean', 'vehicle'],
	"void",
	"Actor gets in the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['vehicle', 'unit_seat_mapping'],
	"void",
	"Actor gets in the named seat of the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_go_to_vehicle",
	['ai', 'boolean', 'vehicle', 'unit_seat_mapping'],
	"void",
	"Actor gets in the named seat of the appropriate vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face",
	['boolean', 'point_reference'],
	"void",
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_player",
	['boolean'],
	"void",
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_player",
	['ai', 'boolean'],
	"void",
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_object",
	['boolean', 'object'],
	"void",
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stationary_face_object",
	['ai', 'boolean', 'object'],
	"void",
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_style",
	['style'],
	"void",
	"Override the actor's style",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_style",
	['ai', 'style'],
	"void",
	"Override the actor's style",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_force_combat_status",
	['short'],
	"void",
	"Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_force_combat_status",
	['ai', 'short'],
	"void",
	"Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_targeting",
	['boolean'],
	"void",
	"Actor autonomous target selection enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_targeting",
	['ai', 'boolean'],
	"void",
	"Actor autonomous target selection enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_looking",
	['boolean'],
	"void",
	"Actor autonomous looking enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_looking",
	['ai', 'boolean'],
	"void",
	"Actor autonomous looking enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_moving",
	['boolean'],
	"void",
	"Actor autonomous moving enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_moving",
	['ai', 'boolean'],
	"void",
	"Actor autonomous moving enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_dialogue",
	['boolean'],
	"void",
	"Actor combat dialogue enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_dialogue",
	['ai', 'boolean'],
	"void",
	"Actor combat dialogue enabled/disabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_activity_termination",
	['boolean'],
	"void",
	"Autonomous termination of activities is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_activity_termination",
	['ai', 'boolean'],
	"void",
	"Autonomous termination of activities is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_dialogue_global",
	['boolean'],
	"void",
	"Combat dialogue is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_suppress_dialogue_global",
	['ai', 'boolean'],
	"void",
	"Combat dialogue is suppressed for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look",
	['boolean', 'point_reference'],
	"void",
	"Actor looks at the point for the remainder of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Actor looks at the point for the remainder of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_player",
	['boolean'],
	"void",
	"Actor looks at nearest player for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_player",
	['ai', 'boolean'],
	"void",
	"Actor looks at nearest player for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_object",
	['boolean', 'object'],
	"void",
	"Actor looks at the object for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_look_object",
	['ai', 'boolean', 'object'],
	"void",
	"Actor looks at the object for the duration of the cs, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim",
	['boolean', 'point_reference'],
	"void",
	"Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_player",
	['boolean'],
	"void",
	"Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_player",
	['ai', 'boolean'],
	"void",
	"Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_object",
	['boolean', 'object'],
	"void",
	"Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_aim_object",
	['ai', 'boolean', 'object'],
	"void",
	"Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face",
	['boolean', 'point_reference'],
	"void",
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_player",
	['boolean'],
	"void",
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_player",
	['ai', 'boolean'],
	"void",
	"Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_object",
	['boolean', 'object'],
	"void",
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_face_object",
	['ai', 'boolean', 'object'],
	"void",
	"Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['boolean'],
	"void",
	"Actor is allowed to shoot at its target or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['ai', 'boolean'],
	"void",
	"Actor is allowed to shoot at its target or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['boolean', 'object'],
	"void",
	"Actor shoots at given target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot",
	['ai', 'boolean', 'object'],
	"void",
	"Actor shoots at given target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_point",
	['boolean', 'point_reference'],
	"void",
	"Actor shoots at given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_point",
	['ai', 'boolean', 'point_reference'],
	"void",
	"Actor shoots at given point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_secondary_trigger",
	['boolean'],
	"void",
	"Actor uses secondary trigger whenever he shoots",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_shoot_secondary_trigger",
	['ai', 'boolean'],
	"void",
	"Actor uses secondary trigger whenever he shoots",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_lower_weapon",
	['boolean'],
	"void",
	"Actor keeps weapon lowered",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_lower_weapon",
	['ai', 'boolean'],
	"void",
	"Actor keeps weapon lowered",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed",
	['real'],
	"void",
	"Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed",
	['ai', 'real'],
	"void",
	"Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed_instantaneous",
	['real'],
	"void",
	"Set the instantaneous speed of the vehicle we're driving",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_speed_instantaneous",
	['ai', 'real'],
	"void",
	"Set the instantaneous speed of the vehicle we're driving",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_boost",
	['boolean'],
	"void",
	"Enables or disables boost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_vehicle_boost",
	['ai', 'boolean'],
	"void",
	"Enables or disables boost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_turn_sharpness",
	['boolean', 'real'],
	"void",
	"Set the sharpness of a vehicle turn (values 0 -> 1). only applicable to nondirectional flying vehicles (e.g. dropships)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_turn_sharpness",
	['ai', 'boolean', 'real'],
	"void",
	"Set the sharpness of a vehicle turn (values 0 -> 1). only applicable to nondirectional flying vehicles (e.g. dropships)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_pathfinding_failsafe",
	['boolean'],
	"void",
	"Actor blocks until pathfinding calls succeed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_enable_pathfinding_failsafe",
	['ai', 'boolean'],
	"void",
	"Actor blocks until pathfinding calls succeed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_pathfinding_radius",
	['real'],
	"void",
	"Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_set_pathfinding_radius",
	['ai', 'real'],
	"void",
	"Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_ignore_obstacles",
	['boolean'],
	"void",
	"Actor does not avoid obstacles when true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_ignore_obstacles",
	['ai', 'boolean'],
	"void",
	"Actor does not avoid obstacles when true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_stop",
	[],
	"void",
	"Actor stops approaching",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_approach_stop",
	['ai'],
	"void",
	"Actor stops approaching",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_push_stance",
	['string_id'],
	"void",
	"Actor pushes given stance during this command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_push_stance",
	['ai', 'string_id'],
	"void",
	"Actor pushes given stance during this command script",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['boolean'],
	"void",
	"Actor crouches for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['ai', 'boolean'],
	"void",
	"Actor crouches for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['boolean', 'real'],
	"void",
	"Actor crouches / uncrouches, transitioning over the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_crouch",
	['ai', 'boolean', 'real'],
	"void",
	"Actor crouches / uncrouches, transitioning over the given number of seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_walk",
	['boolean'],
	"void",
	"Actor walks for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_walk",
	['ai', 'boolean'],
	"void",
	"Actor walks for the remainder of the command script, or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_throttle_set",
	['boolean', 'real'],
	"void",
	"Forces throttle to the specified value (0-1) for remainder of command script or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_throttle_set",
	['ai', 'boolean', 'real'],
	"void",
	"Forces throttle to the specified value (0-1) for remainder of command script or until overridden",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_set",
	['string_id', 'boolean'],
	"void",
	"Actor enters the given posture (enters immediately rather than plays the entry animation if argument is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_set",
	['ai', 'string_id', 'boolean'],
	"void",
	"Actor enters the given posture (enters immediately rather than plays the entry animation if argument is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_exit",
	[],
	"void",
	"Actor exits the posture it's in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_posture_exit",
	['ai'],
	"void",
	"Actor exits the posture it's in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stow",
	['boolean'],
	"void",
	"Actor stows its current weapon, based on the second bool variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stow",
	['ai', 'boolean'],
	"void",
	"Actor stows its current weapon, based on the second bool variable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_teleport",
	['point_reference', 'point_reference'],
	"void",
	"Actor teleports to point1 facing point2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_teleport",
	['ai', 'point_reference', 'point_reference'],
	"void",
	"Actor teleports to point1 facing point2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_custom_animation",
	[],
	"void",
	"Stop running a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_custom_animation",
	['ai'],
	"void",
	"Stop running a custom animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_sound",
	['sound'],
	"void",
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_stop_sound",
	['ai', 'sound'],
	"void",
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_player_melee",
	['long'],
	"void",
	"Actor performs player-specific melee",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_player_melee",
	['ai', 'boolean', 'long'],
	"void",
	"Actor performs player-specific melee",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_melee_direction",
	['long'],
	"void",
	"Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_melee_direction",
	['ai', 'boolean', 'long'],
	"void",
	"Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_smash_direction",
	['long'],
	"void",
	"Actor performs smash in provided direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_smash_direction",
	['ai', 'boolean', 'long'],
	"void",
	"Actor performs smash in provided direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cs_actor_on_station",
	['string_id'],
	"void",
	"Assigns actor to stationkeeping station",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"actorsClearErrors",
	[],
	"void",
	"Clears all actor errors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_play_show",
	['string_id'],
	"long",
	"Creates a new show with a given name. returns a show id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_stop_show",
	['long'],
	"void",
	"Stops the show with the given id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_is_playing",
	['long'],
	"boolean",
	"Returns true if the given show is still playing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_is_action_done",
	['string_id'],
	"boolean",
	"Returns true if the action with the given name is done. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_is_action_playing",
	['string_id'],
	"boolean",
	"Returns true if the action with the given name is currently playing. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_get_puppet",
	['string_id'],
	"object",
	"Returns the object with the given puppet name. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_kill_biped",
	['object', 'boolean'],
	"void",
	"<object> <ragdoll>. kills the puppet at the end of the animation and optionally activates the ragdoll. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_exit_vehicle_immediate",
	['object', 'boolean', 'boolean'],
	"void",
	"<biped> <standing> <instant ready weapon>. tells a character to exit the vehicle immediately. can only be used from inside a puppeteer script fragment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pup_disable_splitscreen",
	['boolean'],
	"void",
	"Disables splitscreen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_control",
	['boolean'],
	"void",
	"Toggles script control of the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_control",
	['object', 'boolean'],
	"void",
	"Toggles script control of the camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set",
	['cutscene_camera_point', 'short'],
	"void",
	"Moves the camera to the specified camera point over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_relative",
	['cutscene_camera_point', 'short', 'object'],
	"void",
	"Moves the camera to the specified camera point over the specified number of ticks (position is relative to the specified object)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation",
	['animation_graph', 'string_id'],
	"void",
	"Begins a prerecorded camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag'],
	"void",
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_with_speed",
	['animation_graph', 'string_id', 'real'],
	"void",
	"Begins a prerecorded camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative_with_speed",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'real'],
	"void",
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative_with_speed_loop",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'real', 'boolean'],
	"void",
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_animation_relative_with_speed_loop_offset",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'real', 'boolean', 'real'],
	"void",
	"Begins a prerecorded camera animation synchronized to unit relative to cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_attach",
	['object', 'string_id', 'boolean'],
	"void",
	"<object> <marker> <fov>. attaches the scripted camera to a marker of an object. if fov is true, the scale of the marker determines the fov (in radians)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_predict_resources_at_frame",
	['animation_graph', 'string_id', 'unit', 'cutscene_flag', 'long'],
	"void",
	"Predict resources at a frame in camera animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_predict_resources_at_point",
	['cutscene_camera_point'],
	"void",
	"Predict resources given a camera point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_first_person",
	['unit'],
	"void",
	"Makes the scripted camera follow a unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_cinematic",
	[],
	"void",
	"Makes the scripted camera follow the path of a cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_cinematic_scene",
	['cinematic_scene_data_definition', 'long', 'cutscene_flag'],
	"void",
	"Sets the scene, shot, and cutscene flag for the cinematic camera (note: camera must be in cinematic mode by calling camera_set_cinematic)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_place_relative",
	['object'],
	"void",
	"All subsequent camera placement in sapien be marked as relative to this object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_place_worldspace",
	[],
	"void",
	"All subsequent camera placement in sapien will be marked as worldspace",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_time",
	[],
	"short",
	"Returns the number of ticks remaining in the current camera interpolation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_field_of_view",
	['real', 'short'],
	"void",
	"Sets the field of view",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_camera_set_easing_in",
	['real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Controls the camera easing from player position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_camera_set_easing_out",
	['real'],
	"void",
	"Controls the camera easing back to the player position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_print",
	['string'],
	"void",
	"Print status lines for cinematic debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_pan",
	['cutscene_camera_point', 'short'],
	"void",
	"Moves the camera to the specified camera point over the specified number of ticks with a constant speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_pan",
	['cutscene_camera_point', 'cutscene_camera_point', 'short', 'short', 'real', 'short', 'real'],
	"void",
	"Camera_pan <start point> <end point> <ticks> <ease-in ticks> <start velocity scale> <ease-out ticks> <end velocity scale>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save",
	[],
	"void",
	"Saves the camera position and facing to camera_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load",
	[],
	"void",
	"Loads the saved camera position and facing from camera_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save_name",
	['string'],
	"void",
	"Saves the camera position and facing to <name>_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_name",
	['string'],
	"void",
	"Loads the camera position and facing from <name>_<map_name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_save_simple_name",
	['string'],
	"void",
	"Saves the camera position and facing to camera_<name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_simple_name",
	['string'],
	"void",
	"Loads the camera position and facing from camera_<name>.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_load_text",
	['string'],
	"void",
	"Loads the camera position and facing from a passed in string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_camera_set_position_facing",
	['real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Sets the debug flycam to the specified world-space coordinates and orientation vector",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_debug_camera",
	['boolean'],
	"void",
	"Enable/disable camera debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_print_camera_transform",
	['long'],
	"void",
	"Spews camera transform for the given output user index. for remote tools",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_print_deterministic_camera_transform",
	['long'],
	"void",
	"Spews camera transform for the reticule for the given output user index. for remote tools",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty_get",
	[],
	"game_difficulty",
	"Returns the current difficulty setting, but lies to you and will never return easy, instead returning normal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty_get_real",
	[],
	"game_difficulty",
	"Returns the actual current difficulty setting without lying",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_get",
	[],
	"short",
	"Returns the number of the insertion point the map was started at",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_set_object",
	['object'],
	"void",
	"Sets the specified object as the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_set_camera",
	['cutscene_camera_point'],
	"void",
	"Sets the specified cutscene camera point as the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_clear",
	[],
	"void",
	"Removes the special place that activates everything it sees",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvs_reset",
	[],
	"void",
	"Forces pvs to empty then back to full",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_unzoom_all",
	[],
	"void",
	"Resets zoom levels on all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"players_deactivate_all_equipment",
	[],
	"void",
	"Deactivates all players equipments",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_enable_input",
	['boolean'],
	"void",
	"Toggle player input. the player can still free-look, but nothing else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_disable_movement",
	['boolean'],
	"void",
	"Toggle player input. the look stick works, but nothing else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_disable_movement",
	['player', 'boolean'],
	"void",
	"Toggle input for a specific player. the look stick works, but nothing else",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_disable_weapon_pickup",
	['boolean'],
	"void",
	"Enable/disable all players' ability to pick up weapons",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_night_vision_on",
	[],
	"boolean",
	"Returns true if any player has night vision on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_night_vision_on",
	['unit'],
	"boolean",
	"Returns true if the unit has a flashlight on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_active_camouflage_on",
	[],
	"boolean",
	"Returns true if any player is active camouflaged",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_camera_control",
	['boolean'],
	"boolean",
	"Enables/disables camera control globally",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_reset",
	[],
	"void",
	"Resets the player action test state so that all tests will return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_primary_trigger",
	[],
	"boolean",
	"Returns true if any player has used primary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_secondary_trigger",
	[],
	"boolean",
	"Returns true if any player has used secondary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_grenade_trigger",
	[],
	"boolean",
	"Returns true if any player has used grenade trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_vision_trigger",
	[],
	"boolean",
	"Returns true if any player has used vision trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_weapons",
	[],
	"boolean",
	"Returns true if any player has hit the rotate-weapon button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_grenades_prev",
	[],
	"boolean",
	"Returns true if any player has hit the rotate-grenades-prev button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_rotate_grenades_next",
	[],
	"boolean",
	"Returns true if any player has hit the rotate-grenades-next button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_jump",
	[],
	"boolean",
	"Returns true if any player has hit the jump button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_equipment",
	[],
	"boolean",
	"Returns true if any player has hit the equipment button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_context_primary",
	[],
	"boolean",
	"Returns true if any player has hit the reload button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_vehicle_trick_primary",
	[],
	"boolean",
	"Returns true if any player has hit the vehicle trick button on the primary trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_vehicle_trick_secondary",
	[],
	"boolean",
	"Returns true if any player has hit the vehicle trick button on the grenade trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_melee",
	[],
	"boolean",
	"Returns true if any player has hit the melee button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_action",
	[],
	"boolean",
	"Returns true if any player has hit the action key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_accept",
	[],
	"boolean",
	"Returns true if any player has hit accept since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_cancel",
	[],
	"boolean",
	"Returns true if any player has hit cancel key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_up",
	[],
	"boolean",
	"Returns true if any player has looked up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_down",
	[],
	"boolean",
	"Returns true if any player has looked down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_left",
	[],
	"boolean",
	"Returns true if any player has looked left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_right",
	[],
	"boolean",
	"Returns true if any player has looked right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_fwd",
	[],
	"boolean",
	"Returns true if any player has moved forward since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_back",
	[],
	"boolean",
	"Returns true if any player has moved back since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_left",
	[],
	"boolean",
	"Returns true if any player has moved left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_right",
	[],
	"boolean",
	"Returns true if any player has moved right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_look_relative_all_directions",
	[],
	"boolean",
	"Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_move_relative_all_directions",
	[],
	"boolean",
	"Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_cinematic_skip",
	[],
	"boolean",
	"Returns true if any player has pressed the cinematic skip button (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_start",
	[],
	"boolean",
	"Returns true if any player has pressed the start button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_back",
	[],
	"boolean",
	"Returns true if any player has pressed the back button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_up",
	[],
	"boolean",
	"Returns true if any player has pressed dpad up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_down",
	[],
	"boolean",
	"Returns true if any player has pressed dpad down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_left",
	[],
	"boolean",
	"Returns true if any player has pressed dpad left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_dpad_right",
	[],
	"boolean",
	"Returns true if any player has pressed dpad right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_reset",
	['player'],
	"void",
	"Resets the player action test state so that all tests will return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_primary_trigger",
	['player'],
	"boolean",
	"Returns true if any player has used primary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_secondary_trigger",
	['player'],
	"boolean",
	"Returns true if any player has used secondary trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_grenade_trigger",
	['player'],
	"boolean",
	"Returns true if any player has used grenade trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vision_trigger",
	['player'],
	"boolean",
	"Returns true if any player has used vision trigger since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_weapons",
	['player'],
	"boolean",
	"Returns true if any player has hit the rotate-weapon button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_grenades_prev",
	['player'],
	"boolean",
	"Returns true if any player has hit the rotate-grenades-prev button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_rotate_grenades_next",
	['player'],
	"boolean",
	"Returns true if any player has hit the rotate-grenades-next button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_jump",
	['player'],
	"boolean",
	"Returns true if any player has hit the jump button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_equipment",
	['player'],
	"boolean",
	"Returns true if any player has hit the equipment button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_context_primary",
	['player'],
	"boolean",
	"Returns true if any player has hit the reload button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vehicle_trick_primary",
	['player'],
	"boolean",
	"Returns true if any player has hit the vehicle trick button on the primary trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_vehicle_trick_secondary",
	['player'],
	"boolean",
	"Returns true if any player has hit the vehicle trick button on the grenade trigger side since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_melee",
	['player'],
	"boolean",
	"Returns true if any player has hit the melee button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_action",
	['player'],
	"boolean",
	"Returns true if any player has hit the action key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_accept",
	['player'],
	"boolean",
	"Returns true if any player has hit accept since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_cancel",
	['player'],
	"boolean",
	"Returns true if any player has hit cancel key since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_up",
	['player'],
	"boolean",
	"Returns true if any player has looked up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_down",
	['player'],
	"boolean",
	"Returns true if any player has looked down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_left",
	['player'],
	"boolean",
	"Returns true if any player has looked left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_right",
	['player'],
	"boolean",
	"Returns true if any player has looked right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_fwd",
	['player'],
	"boolean",
	"Returns true if a player has moved forward since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_back",
	['player'],
	"boolean",
	"Returns true if a player has moved back since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_left",
	['player'],
	"boolean",
	"Returns true if a player has moved left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_right",
	['player'],
	"boolean",
	"Returns true if a player has moved right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_look_relative_all_directions",
	['player'],
	"boolean",
	"Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_move_relative_all_directions",
	['player'],
	"boolean",
	"Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_cinematic_skip",
	['player'],
	"boolean",
	"Returns true if any player has pressed the cinematic skip button (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_start",
	['player'],
	"boolean",
	"Returns true if any player has pressed the start button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_back",
	['player'],
	"boolean",
	"Returns true if any player has pressed the back button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_up",
	['player'],
	"boolean",
	"Returns true if any player has pressed dpad up since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_down",
	['player'],
	"boolean",
	"Returns true if any player has pressed dpad down since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_left",
	['player'],
	"boolean",
	"Returns true if any player has pressed dpad left since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_dpad_right",
	['player'],
	"boolean",
	"Returns true if any player has pressed dpad right since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_hero_assist",
	['player'],
	"boolean",
	"Returns true if any player has pressed 'hero assist' (sprint) since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_action_tap",
	['player'],
	"boolean",
	"Returns true while the given player is tapping the action button",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_message",
	['player'],
	"void",
	"Locks the accept button until the player presses accept",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_confirm_cancel_message",
	['player'],
	"void",
	"Locks the cancel button until the player presses cancel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_enable_soft_ping_region",
	['unit', 'damage_region', 'boolean'],
	"void",
	"Enable/disable pain screen damage weight outputs on all units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_print_soft_ping_regions",
	['unit'],
	"void",
	"Print the pain screen state on all the units",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_looking_up",
	[],
	"boolean",
	"True if the first player is looking up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player0_looking_down",
	[],
	"boolean",
	"True if the first player is looking down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_pitch",
	['player', 'real', 'long'],
	"void",
	"Sets up player look up test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_has_female_voice",
	['player'],
	"boolean",
	"Returns true if the player has selected the female voice option",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_lookstick_forward",
	['player'],
	"boolean",
	"True if the specified player pushed forward on lookstick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_lookstick_backward",
	['player'],
	"boolean",
	"True if the specified player pushed backward on lookstick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_teleport_player",
	['unit', 'unit'],
	"void",
	"For testing: teleports one player to another's location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_reload",
	[],
	"void",
	"Looks for local tags on disk if they are not already loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_force_local",
	[],
	"void",
	"Forces game to use local tags if available",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_force_content",
	[],
	"void",
	"Forces game to use content tags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_content_status_force_clear",
	[],
	"void",
	"Clears any force on the content status system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset",
	[],
	"void",
	"Starts the map from the beginning",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset_debug",
	[],
	"void",
	"Starts the map from the beginning.  this is a debug only command!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_reset_random",
	[],
	"void",
	"Starts the map from the beginning with a new random seed.  this is a debug only command!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_zone_set",
	['zone_set'],
	"void",
	"Switches to a different zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_switch_to_bsp",
	['string'],
	"void",
	"Loads a single bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_print_zone_sets",
	[],
	"void",
	"Prints out the names of all the zone sets",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_print_current_zone_set",
	[],
	"void",
	"Brings out the names of all the bsps in the current zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_print_bsps_bounds",
	[],
	"void",
	"Prints the active bsps bounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"current_zone_set",
	[],
	"long",
	"Returns the current zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"current_zone_set_fully_active",
	[],
	"long",
	"Returns the current zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"switch_map_and_zone_set",
	['string', 'string'],
	"void",
	"Switches to a different scenario and zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"crash",
	['string'],
	"void",
	"Crashes (for debugging)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"version",
	[],
	"void",
	"Prints the build version",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status",
	[],
	"void",
	"Prints the value of all global status variables",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_movie",
	['short', 'real', 'short', 'short'],
	"void",
	"<frame rate> <seconds> <width> <height>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_movie_distributed",
	['short', 'long', 'short', 'long', 'long'],
	"void",
	"<frame rate> <seconds> <screen size> <mod count> <mod index>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot",
	['string'],
	"void",
	"Takes a screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_debug",
	[],
	"void",
	"Takes a screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"go_to_camera_point",
	['long'],
	"void",
	"Goes to the camera point at the index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_zone_set",
	['string', 'short'],
	"void",
	"Goes to every camera point in a zone set and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_scenario",
	['string'],
	"void",
	"Goes to every camera point and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_current_zone_set",
	['string'],
	"void",
	"Goes to every camera point in the current bsp and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_zone_set",
	['string', 'short', 'string'],
	"void",
	"Goes to every camera point in a zone set and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_scenario",
	['string', 'string'],
	"void",
	"Goes to every camera point and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"take_screenshots_of_current_zone_set",
	['string', 'string'],
	"void",
	"Goes to every camera point in the current bsp and takes a picture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"perf_capture_at_location",
	['string'],
	"void",
	"Takes perf data at a location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streaming_report_at_location",
	['string'],
	"void",
	"Takes streaming data at a location",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_big",
	['short', 'string'],
	"void",
	"Takes an nxn multiple-page screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_big_raw",
	['short', 'string'],
	"void",
	"Takes an nxn multiple-page screenshot and saves as an hdr <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_size",
	['short', 'short', 'string'],
	"void",
	"Takes a <width> x <height> screenshot and saves as an hdr <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_simple",
	['string'],
	"void",
	"Takes a simple screenshot and saves as <name>.tif, static_cast<hsfunctionflags>(flag(ehsfunction_debugflag))",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_orthographic",
	['long', 'string'],
	"void",
	"Takes an nxn multiple-page orthographic screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_map_generate",
	['real', 'string'],
	"void",
	"Takes an ordnance map screenshot of the specified size (in megs) and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_cubemap",
	['string'],
	"void",
	"Takes a cubemap screenshot and saves as <name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"screenshot_webmap",
	['string'],
	"void",
	"Takes two special screenshots and saves them, along with the camera information, as <name>.tif, <name>_secondary.tif and <name>_camera.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cubemap_dynamic_generate",
	[],
	"void",
	"Generates a dynamic cubemap and saves in the cubemaps directory",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_snapshot",
	['long', 'string'],
	"void",
	"Takes a set of snapshot of object and saves as <snapshot\\name>.tif",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"structure_instance_snapshot",
	['long'],
	"void",
	"Takes snapshot of all the instances in this bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_thumbnail",
	['string', 'string', 'string'],
	"void",
	"Takes snapshots of objects to be used as thumnail previews",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_menu",
	[],
	"void",
	"Goes back to the main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_halt",
	['string'],
	"void",
	"Goes to a halted pregame state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"map_name",
	['string'],
	"void",
	"The same as game_start: launches a game for debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"module",
	['string'],
	"void",
	"Specifies modules to load after main map loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_multiplayer",
	['string'],
	"void",
	"Debug map launching: sets the multiplayer engine for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_campaign",
	[],
	"void",
	"Debug map launching: sets the next map to run in campaign mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_survival",
	[],
	"void",
	"Debug map launching: sets the next map to run in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_firefight",
	[],
	"void",
	"Debug map launching: sets the next map to run in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_sandbox",
	[],
	"void",
	"Debug map launching: sets the next map to run in sandbox mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_player_count",
	['long'],
	"void",
	"Debug map launching: sets the number of splitscreen players for the next map); does not set game mode (campaign vs. multiplayer)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_set_variant",
	['string'],
	"void",
	"Launches a game variant a on a map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_multiplayer",
	[],
	"void",
	"Debug map launching: sets the next map to run in multiplayer (megalo)  mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_splitscreen",
	['long'],
	"void",
	"Debug map launching: sets the number of multiplayer splitscreen players for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_difficulty",
	['game_difficulty'],
	"void",
	"Debug map launching: sets the difficulty of the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_active_skulls",
	['long'],
	"void",
	"Debug map launching: sets the active skulls of the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_coop_players",
	['long'],
	"void",
	"Debug map launching: sets the number of coop players for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_zone_set",
	['string'],
	"void",
	"Debug map launching: sets the initial bsp for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_BSP",
	['string'],
	"void",
	"Debug map launching: sets the initial bsp for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_initial_starting_location",
	['long'],
	"void",
	"Debug map launching: sets the initial starting point for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate",
	['long'],
	"void",
	"Debug map launching: sets the tick rate for the next map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start",
	['string'],
	"void",
	"Debug map launching: starts a game on the specified map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start_when_ready",
	[],
	"void",
	"Nicely starts the current game once the pregame lobby is stable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_start_when_joined",
	['long'],
	"void",
	"Nicely starts a game when the specified number of users are in the lobby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_rate",
	['real', 'real', 'real'],
	"void",
	"Changes game update rate (danger: only use if you know what you're doing!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"language_set",
	['string'],
	"void",
	"Change the language for localization",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_memory",
	[],
	"void",
	"Dumps memory leaks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_memory_by_file",
	[],
	"void",
	"Dumps memory leaks by source file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_memory_for_file",
	['string'],
	"void",
	"Dumps memory leaks from the specified source file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_tags",
	[],
	"void",
	"Writes all memory being used by tag files into tag_dump.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_single_tag",
	[],
	"void",
	"Inspect a single tag for programmer within visual studio",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tags_verify_all",
	[],
	"void",
	"Verifies usage of infidel fields is correct",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_next_frame",
	['long'],
	"void",
	"Creates a tracedump of the next frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_next_frame_to_file",
	['long', 'string'],
	"void",
	"Creates a tracedump of the next frame in a specific file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_tick",
	['long'],
	"void",
	"Creates a tracedump of a specific game tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"collision_log_enable",
	['boolean'],
	"void",
	"Enables or disables collision logging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_control_get",
	['string'],
	"void",
	"Gets a damage control setting by string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"damage_control_set",
	['string', 'boolean'],
	"void",
	"Sets a damage control setting by string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_in",
	['real', 'real', 'real', 'long'],
	"void",
	"Does a screen fade in from a particular color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_out",
	['real', 'real', 'real', 'long'],
	"void",
	"Does a screen fade out to a particular color",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_in_for_player",
	['player'],
	"void",
	"Fade in a player's screen from black",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"fade_out_for_player",
	['player'],
	"void",
	"Fade out a player's screen to black",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"init_light_rigs_of_shot",
	['long'],
	"void",
	"Init light rigs of the current shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shutdown_all_light_rigs",
	[],
	"void",
	"Shutdown all persistent and non-persistent light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shutdown_light_rigs_of_shot",
	[],
	"void",
	"Shutdown any non-persistent existing light rigs of the current shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"apply_scriptable_light_rigs",
	['object', 'string_id', 'cinematic_lightprobe', 'cutscene_camera_point'],
	"void",
	"Applies scriptable light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unapply_scriptable_light_rigs",
	['object'],
	"void",
	"Unapply scriptable light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"restore_all_vmf_light_rigs",
	[],
	"void",
	"Restore all vmf light rigs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_light_rig_direction",
	['string', 'long', 'real', 'real', 'real'],
	"void",
	"Script light rig direction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_light_rig_vmf",
	['string', 'real', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Script light rig vmf",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scrip_light_rig_fill",
	['string', 'real', 'real', 'real', 'real'],
	"void",
	"Script light rig fill",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"script_light_rig_balance",
	['string', 'real', 'real', 'real'],
	"void",
	"Script light rig balance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bake_forge_lights",
	['boolean'],
	"void",
	"Bake lights on the xbox for forge world maps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_lightmap_direct_scalar_bsp",
	['short'],
	"real",
	"Get lightmap direct scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_lightmap_indirect_scalar_bsp",
	['short'],
	"real",
	"Get lightmap indirect scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_lightmap_analytic_scalar_bsp",
	['short'],
	"real",
	"Get lightmap analytic scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_lightmap_direct_scalar_bsp",
	['short', 'real'],
	"void",
	"Set lightmap direct scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_lightmap_indirect_scalar_bsp",
	['short', 'real'],
	"void",
	"Set lightmap indirect scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_lightmap_analytic_scalar_bsp",
	['short', 'real'],
	"void",
	"Set lightmap analytic scalar for bsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_out_from_game",
	['string_id'],
	"long",
	"Executes the fade settings setup in the cinematics tag for fading out from the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_in_to_cinematic",
	['string_id'],
	"long",
	"Executes the fade settings setup in the cinematics tag for fading in to the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_out_from_cinematic",
	['string_id'],
	"long",
	"Executes the fade settings setup in the cinematics tag for fading out from the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_fade_in_to_game",
	['string_id'],
	"long",
	"Executes the fade settings setup in the cinematics tag for fading in to the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_out_from_game",
	['cinematic_transition_definition'],
	"long",
	"Executes the fade settings setup in the cinematic transition for fading out from the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_in_to_cinematic",
	['cinematic_transition_definition'],
	"long",
	"Executes the fade settings setup in the cinematic transition for fading in to the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_out_from_cinematic",
	['cinematic_transition_definition'],
	"long",
	"Executes the fade settings setup in the cinematic transition for fading out from the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_transition_fade_in_to_game",
	['cinematic_transition_definition'],
	"long",
	"Executes the fade settings setup in the cinematic transition for fading in to the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_run_script_by_name",
	['string_id'],
	"void",
	"Runs a cinematic script by name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_start",
	[],
	"void",
	"Initializes game to start a cinematic (interruptive) cutscene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_stop",
	[],
	"void",
	"Initializes the game to end a cinematic (interruptive) cutscene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_skip_start_internal",
	[],
	"void",
	"Enable cinematic skipping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_skip_stop_internal",
	[],
	"void",
	"Disable cinematic skipping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_skip_in_progress",
	[],
	"boolean",
	"Is cinematic skippable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_show_letterbox",
	['boolean'],
	"void",
	"Sets or removes the letterbox bars",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_show_letterbox_immediate",
	['boolean'],
	"void",
	"Sets or removes the letterbox bars",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_title",
	['cutscene_title'],
	"void",
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_title_delayed",
	['cutscene_title', 'real'],
	"void",
	"Activates the chapter title, delayed by <real> seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_clear_title",
	['cutscene_title'],
	"void",
	"Clears the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_suppress_bsp_object_creation",
	['boolean'],
	"void",
	"Suppresses or enables the automatic creation of objects during cutscenes due to a bsp switch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_subtitle",
	['string_id', 'real'],
	"void",
	"Displays the named subtitle for <real> seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set",
	['cinematic_definition'],
	"void",
	"Sets the cinematic name for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_shot",
	['cinematic_scene_definition', 'cinematic_scene_data_definition', 'long'],
	"void",
	"Sets the scene and shot for the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_get_shot",
	[],
	"void",
	"Print the stored scene and shot information to the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_atmospere_fog",
	['long'],
	"void",
	"Sets atmosphere fog for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_camera_settings",
	['long'],
	"void",
	"Sets camera fx settings for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_ssao_mode",
	['long'],
	"void",
	"Sets ssao mode for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_lightmap_scalars",
	['real', 'real'],
	"void",
	"Sets lightmap direct and indirect scalars for cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_early_exit",
	['long'],
	"void",
	"Used to store the state of skippable cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_get_early_exit",
	[],
	"long",
	"Used to retrieve the state of skippable cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_active_camera",
	['string_id'],
	"void",
	"Used to change the rasterizer to display one of the texture cameras",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_create",
	['string_id'],
	"void",
	"Creates an object for use by cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_create_cinematic_anchor",
	['cutscene_flag'],
	"void",
	"Creates a cinematic anchor object for use by cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_destroy",
	['string_id'],
	"void",
	"Destroys an object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_objects_destroy_all",
	[],
	"void",
	"Destroys all objects created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_destroy",
	[],
	"void",
	"Releases everything created by the cinematics system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_full_screen_bink",
	['boolean'],
	"void",
	"Sets or removes cinematic full screen bink options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_in_progress",
	[],
	"boolean",
	"Tests if a cinematic is in progress",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_get_in_progress_index",
	[],
	"long",
	"Returns scenario index of cinematic in progress",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_can_be_skipped",
	[],
	"boolean",
	"Tests if a cinematic can be skipped",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_check_scenario_pruning",
	['string'],
	"long",
	"Checks if cinematic scripts have been pruned",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_prune_object",
	['string'],
	"void",
	"Prunes object type from cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_light_object",
	['object', 'string_id', 'cinematic_lightprobe', 'cutscene_camera_point'],
	"void",
	"Attaches cinematic lights to <object> at <marker> using scenario cinematic lighting palette entry <scenario-cinematic-lighting-name> from point of view of camera reference <camera>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_light_object_off",
	['object'],
	"void",
	"Turn off cinematic lighting for the object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lighting_rebuild_all",
	[],
	"void",
	"Rebuild all cinematic lighting (sh only)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CinematicLightingUpdateShadow",
	['string', 'real', 'real', 'real'],
	"void",
	"Cinematic update for shadows",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CinematicLightingUpdateSample",
	['string', 'real', 'real', 'real', 'real', 'real', 'real'],
	"void",
	"Cinematic update the sampled params",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CinematicLightingUpdateProbe",
	['string', 'long', 'real', 'real', 'real', 'real'],
	"void",
	"Cinematic update the probe data",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_object_get",
	['string_id'],
	"object",
	"Returns an object created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_unit_get",
	['string_id'],
	"unit",
	"Returns a unit created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_weapon_get",
	['string_id'],
	"weapon",
	"Returns a weapon created by cinematic_object_create",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_reset",
	['boolean'],
	"void",
	"Resets the cinematics internal state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_briefing",
	['boolean'],
	"void",
	"Used for briefing cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_enter",
	[],
	"void",
	"Debug setup at the start of cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_exit",
	[],
	"void",
	"Debug setup at the end of cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_play",
	['string', 'string', 'boolean', 'long'],
	"boolean",
	"Debug play cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_debug_stop",
	[],
	"void",
	"Debug stop cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_pause",
	[],
	"void",
	"Pause/resume the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_step_one_frame",
	[],
	"void",
	"Step the cinematic one frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_settings_enable",
	['boolean'],
	"void",
	"Enables/disables all cinematic settings (lightmap, fog, camera, etc)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_cinematic_skip_script_stripping",
	['boolean'],
	"void",
	"Skip cinematic script stripping (will play with missing shots)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_cinematic",
	['long'],
	"cinematic_definition",
	"Retrieve a cinematic tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_scene",
	['long'],
	"cinematic_scene_definition",
	"Retrieve a cinematic scene tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_scene_data",
	['long'],
	"cinematic_scene_data_definition",
	"Retrieve a cinematic scene data tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_effect",
	['long', 'long', 'long', 'long'],
	"effect",
	"Retrieve an effect tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_dialogue",
	['long', 'long', 'long', 'long'],
	"sound",
	"Retrieve a sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_music",
	['long', 'long', 'long', 'long'],
	"sound",
	"Retrieve a sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_music_looping",
	['long', 'long', 'long', 'long'],
	"looping_sound",
	"Retrieve a looping sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_animation",
	['long', 'long', 'long'],
	"animation_graph",
	"Retrieve a looping sound tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_hide_scene_object",
	['long'],
	"void",
	"Hides specified object in current cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_object_coop_flags_valid",
	['long', 'long'],
	"boolean",
	"Evaluate if a cinematic object should be displayed for the current coop flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_fade_out",
	['real', 'real', 'real', 'short'],
	"void",
	"Fade out at the end of the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_object",
	['long', 'long'],
	"void",
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_cinematic_object",
	['long', 'long'],
	"void",
	"Create a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_animation",
	['long', 'long', 'string_id'],
	"void",
	"Animate a manually placed cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_object",
	['long', 'long'],
	"void",
	"Destroy a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_objects",
	['long'],
	"void",
	"Destroys all cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_scene",
	['long'],
	"void",
	"Creates cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_scene",
	['long'],
	"void",
	"Destroys cinematic scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_shot",
	['long', 'long', 'cutscene_flag'],
	"void",
	"Sets the scene, shot, and cutscene flag for the cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_initialize_shot",
	['long'],
	"void",
	"Intializes the cinematic for the given shot of the current cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_destroy_shot",
	[],
	"void",
	"Destroys current cinematic shot",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_effect",
	['long'],
	"void",
	"Play a cinematic effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_effect_from_flag",
	['long', 'cutscene_flag'],
	"void",
	"Play a cinematic effect attached to fx marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_effect",
	['long'],
	"void",
	"Stop a cinematic effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_effect_from_flag",
	['long', 'cutscene_flag'],
	"void",
	"Stop a cinematic effect attached to fx marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_kill_effect",
	['long'],
	"void",
	"Stop a cinematic effect and kill all its particles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_kill_effect_from_flag",
	['long', 'cutscene_flag'],
	"void",
	"Stop a cinematic effect attached to fx marker and kill all its particles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_music",
	['long'],
	"void",
	"Play a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_dialogue",
	['long'],
	"void",
	"Play a cinematic dialogue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_music",
	['long'],
	"void",
	"Stops a cinematic music",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_screen_effect",
	['long'],
	"void",
	"Starts playing a cinematic screen effect (.screen_effect)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_screen_effect",
	['long'],
	"void",
	"Stops playing a cinematic screen effect (.screen_effect)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_object",
	['long', 'long', 'long', 'string_id', 'boolean'],
	"void",
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_cinematic_object",
	['long', 'long', 'long', 'string_id', 'boolean'],
	"void",
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_object_no_animation",
	['long', 'long', 'long', 'boolean'],
	"void",
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_create_and_animate_cinematic_object_no_animation",
	['long', 'long', 'long', 'boolean'],
	"void",
	"Create and animate a cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_set_user_input_constraints",
	['long', 'long', 'long'],
	"void",
	"Set user input constraints from a cinematic tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_start_texture_movie",
	['long', 'long', 'long'],
	"void",
	"Plays texture bink movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_stop_texture_movie",
	['long', 'long', 'long'],
	"void",
	"Stops texture bink movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_won",
	[],
	"void",
	"Causes the player to successfully finish the current level and move to the next",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_won_with_finish_timer_override",
	['real'],
	"void",
	"Causes the player to successfully finish the current level and move to the next; overrides finish timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_lost",
	['boolean'],
	"void",
	"Marks the game as lost or not lost",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_revert",
	[],
	"void",
	"Causes the player to revert to his previous saved game (for testing and cinematic skipping only please!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_award_level_complete_achievements",
	[],
	"void",
	"Awards end of level progress to players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_is_cooperative",
	[],
	"boolean",
	"Returns true if the game is cooperative",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_is_playtest",
	[],
	"boolean",
	"Returns the hs global boolean 'global_playtest_mode' which can be set in your init.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_can_use_flashlights",
	['boolean'],
	"void",
	"Allows or disallows the user of player flashlights",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_and_quit",
	[],
	"void",
	"Save & quit to the main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_unsafe",
	[],
	"void",
	"Saves right now, even if the game is in an immediate-loss state (never use this! ever!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_unlock",
	['short'],
	"void",
	"Unlocks the given insertion point for the current map for all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_lock",
	['short'],
	"void",
	"Unlocks the given insertion point for the current map for all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_insertion_point_set",
	['short'],
	"void",
	"Debug map launching: sets the map insertion_point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GameSetBadNextRevert",
	['boolean'],
	"void",
	"Marks the next revert as bad. after too many bad reverts in a row the game will go back 2 checkpoints",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_games_delete_campaign_save",
	['controller'],
	"void",
	"Delete the campaign saved game file for a controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_games_autosave_free_up_space",
	[],
	"void",
	"Tell the autosave queue to run its cleanup routine for each content type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_player",
	['player', 'string_id'],
	"void",
	"Award named achievement to player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_controller",
	['controller', 'string_id'],
	"void",
	"Award named achievement to player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievement_grant_to_all_players",
	['string_id'],
	"void",
	"Award named achievement to all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievements_enable",
	['boolean'],
	"void",
	"Enable or disable the awarding of achievements",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"achievements_skip_validation_checks",
	['boolean'],
	"void",
	"Toggle the disabling of validation checks on achievement awarding",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_influencers",
	['boolean'],
	"void",
	"Toggle debugging of any & all dynamic respawn influencers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_respawn_zones",
	['boolean'],
	"void",
	"Debugs respawn zone influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_proximity_forbid",
	['boolean'],
	"void",
	"Debugs enemy proximity forbid influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_moving_vehicle",
	['boolean'],
	"void",
	"Debugs moving vehicle danger influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_weapon_influences",
	['boolean'],
	"void",
	"Debugs enemy weapon danger influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_dangerous_projectiles",
	['boolean'],
	"void",
	"Debugs dangerous projectile influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_deployed_equipment",
	['boolean'],
	"void",
	"Debugs deployed equipment influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_proximity_enemy",
	['boolean'],
	"void",
	"Debugs enemy proximity bias influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_teammates",
	['boolean'],
	"void",
	"Debugs teammate proximity bias influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_dead_teammates",
	['boolean'],
	"void",
	"Debug dead teammate influencers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_drop_pod",
	['boolean'],
	"void",
	"Debug ordnance drop pod influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_auto_turret",
	['boolean'],
	"void",
	"Debug auto turret influences",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_random_influence",
	['boolean'],
	"void",
	"Toggles display of random influence contribution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_nominal_weight",
	['boolean'],
	"void",
	"Toggles display of the nominal weight influence contribution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_natural_weight",
	['boolean'],
	"void",
	"Toggles display of the natural weight influence contribution",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_target",
	['string'],
	"void",
	"Sets target player for respawn influencer debugging display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_use_history",
	['long'],
	"void",
	"Sets the saved respawn state for respawn influencer debugging display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_initial_spawn_point_objects",
	['boolean'],
	"void",
	"Toggles debug cycling through multiplayer initial spawn points objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_respawn_point_objects",
	['boolean'],
	"void",
	"Toggles debug cycling through multiplayer respawn points objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_get_index",
	[],
	"short",
	"Gets the current debug cycling multiplayer spawn point index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_set_index",
	['short'],
	"void",
	"Sets the current debug cycling multiplayer spawn point index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_ordnance_drop_check",
	['boolean'],
	"void",
	"Toggles testing ordnance drop points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_spawning_kill_user_and_adjust_index",
	['long', 'long'],
	"void",
	"<user index> <index adjustment> - kills the unit associated with the given local user index [0..3] and adds the adjustment to the next debug spawning index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_spawn_point_debugging_level",
	['long'],
	"void",
	"Set spawn point debugging level (0 == none)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_export_variant_settings",
	['string'],
	"void",
	"Export the current game engine variant settings to the specified text file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_general",
	['long'],
	"void",
	"Test game engine general event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_engine_event_test_flavor",
	['long'],
	"void",
	"Test game engine flavor event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load",
	[],
	"void",
	"Loads debug game state from core\\core.bin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_name",
	['string'],
	"void",
	"Loads debug game state from core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save",
	[],
	"void",
	"Saves debug game state to core\\core.bin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save_name",
	['string'],
	"void",
	"Saves debug game state to core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_game",
	[],
	"void",
	"Loads level and game state from core\\core.bin",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_load_game_name",
	['string'],
	"void",
	"Loads level and game state from core\\<path>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_save_state_every_second",
	['boolean'],
	"void",
	"Toggle saving game state out every second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_regular_upload_to_debug_server",
	['boolean'],
	"void",
	"Toggle periodic core uploading to debug server",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_set_upload_option",
	['string'],
	"void",
	"Sets options for game state uploading (current options are 'default', 'repro', and 'stress'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"core_force_immediate_save_on_core_load",
	['boolean'],
	"void",
	"Forces film core loads to trigger game_save_immediate() on load (which mimics the game save that occurs on core load in stress jobs)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"force_debugger_not_present",
	['boolean'],
	"void",
	"Forces is_debugger_present() to return false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"force_debugger_always_present",
	['boolean'],
	"void",
	"Forces is_debugger_present() to return true",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_safe_to_save",
	[],
	"boolean",
	"Returns false if it would be a bad idea to save the player's game right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_safe_to_speak",
	[],
	"boolean",
	"Returns false if it would be a bad idea to play mission dialog right now",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_all_quiet",
	[],
	"boolean",
	"Returns false if there are bad guys around, projectiles in the air, etc",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save",
	[],
	"void",
	"Checks to see if it is safe to save game, then saves (gives up after 8 seconds)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_cancel",
	[],
	"void",
	"Cancels any pending game_save, timeout or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_no_timeout",
	[],
	"void",
	"Checks to see if it is safe to save game, then saves (this version never gives up)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_immediate",
	[],
	"void",
	"Disregards player's current situation and saves (be very careful!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_saving",
	[],
	"boolean",
	"Checks to see if the game is trying to save the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_reverted",
	[],
	"boolean",
	"Don't use this for anything, you black-hearted bastards",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_respawn_dead_players",
	[],
	"void",
	"Respawns all dead players even if no lives are left",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_lives_get",
	['team'],
	"long",
	"Get the number of lives left in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_lives_set",
	['team', 'long'],
	"void",
	"Set the number of lives left in survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_mp_round_count",
	[],
	"long",
	"Get the number of mp rounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_mp_round_current",
	[],
	"long",
	"Get the current mp round index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_get",
	[],
	"short",
	"Get the current set index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_round_get",
	[],
	"short",
	"Get the current round index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_waves_per_round",
	[],
	"short",
	"Get the number of waves per round for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_rounds_per_set",
	[],
	"short",
	"Get the number of rounds per set for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_wave_get",
	[],
	"short",
	"Get the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_multiplier_get",
	[],
	"real",
	"Get the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_multiplier_set",
	['real'],
	"void",
	"Set the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_bonus_multiplier_get",
	[],
	"real",
	"Get the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_bonus_multiplier_set",
	['real'],
	"void",
	"Set the current wave index for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_wave_squad",
	[],
	"long",
	"Returns the name of the squad template for the current wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_initial",
	[],
	"boolean",
	"Returns true if the current wave is the first of the round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_boss",
	[],
	"boolean",
	"Returns true if the current wave is the final of the round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_bonus",
	[],
	"boolean",
	"Returns true if the current wave is the bonus round",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_is_last_in_set",
	[],
	"boolean",
	"Returns true if the currect wave is the last wave before the end of the set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_begin_new_set",
	[],
	"void",
	"Starts a new set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_begin_new_wave",
	[],
	"void",
	"Starts a new wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_end_set",
	[],
	"void",
	"Ends a set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_end_wave",
	[],
	"void",
	"Ends a wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_award_hero_medal",
	[],
	"void",
	"Lets the engine award the hero medal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_incident_new",
	['string_id'],
	"void",
	"Fires a start new set game event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_time_limit",
	[],
	"long",
	"Get the survival mode time limit from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_set_count",
	[],
	"long",
	"Get the survival mode set count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_bonus_lives_awarded",
	[],
	"long",
	"Get the survival mode bonus lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_bonus_target",
	[],
	"long",
	"Get the survival mode bonus target from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_shared_team_life_count",
	[],
	"long",
	"Get the survival mode spartan life count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_elite_life_count",
	[],
	"long",
	"Get the survival mode elite life count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_max_lives",
	[],
	"long",
	"Get the survival mode max lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_generator_count",
	[],
	"long",
	"Get the survival mode generator count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_bonus_lives_elite_death",
	[],
	"long",
	"Get the survival mode bonus lives for killing an elite player from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_scenario_extras_enable",
	[],
	"boolean",
	"Get the survival mode scenario hazards enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_weapon_drops_enable",
	[],
	"boolean",
	"Get the survival mode weapon drops enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_ammo_crates_enable",
	[],
	"boolean",
	"Get the survival mode ammo crates enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_generator_defend_all",
	[],
	"boolean",
	"Get the survival mode generator defend all property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_generator_random_spawn",
	[],
	"boolean",
	"Get the survival mode generator random spawn property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_current_wave_uses_dropship",
	[],
	"boolean",
	"Get the survival mode current wave uses a dropship property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_current_wave_time_limit",
	[],
	"short",
	"Get the survival mode duration property for the current wave from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_get_respawn_time_seconds",
	['mp_team'],
	"long",
	"Respawn time for a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_team_respawns_on_wave",
	['team'],
	"boolean",
	"Does this team respawn only when waves complete?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_sudden_death",
	['boolean'],
	"void",
	"Start or stop sudden death for survival mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_increment_human_score",
	['player'],
	"void",
	"Increments the player's score by one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_increment_elite_score",
	['player'],
	"void",
	"Increments the player's score by one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_spartan_license_plate",
	['long', 'long', 'string_id', 'string_id', 'string_id'],
	"void",
	"Shows the license plate for spartans: variant icon, designator icon, variant text, description text, designator text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_set_elite_license_plate",
	['long', 'long', 'string_id', 'string_id', 'string_id'],
	"void",
	"Shows the license plate for elites: variant icon, designator icon, variant text, description text, designator text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_player_count_by_team",
	['team'],
	"long",
	"Given a team index, returns the player count of that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"survival_mode_players_by_team",
	['team'],
	"object_list",
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_predict",
	['sound'],
	"void",
	"Your mom part 2",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_trigger",
	['sound', 'object', 'real', 'long'],
	"void",
	"Plays an impulse sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start",
	['sound', 'object', 'real'],
	"void",
	"Plays an impulse sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_marker",
	['sound', 'object', 'string_id', 'real'],
	"void",
	"Plays an impulse sound from the specified source object and marker(or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_cinematic",
	['sound', 'object', 'real', 'real', 'real'],
	"void",
	"<sound> <object> <scale> <3d gain> <first person gain> plays an impulse sound from the specified source object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_effect",
	['sound', 'object', 'real', 'string_id'],
	"void",
	"Plays an impulse sound from the specified source object (or none));, with the specified scale and effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_with_subtitle",
	['sound', 'object', 'real', 'string_id', 'string_id'],
	"void",
	"Plays an impulse sound from the specified source object (or none));, with the specified scale and displays a subtitle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_time",
	['sound'],
	"long",
	"Returns the time remaining for the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_time",
	['sound', 'long'],
	"long",
	"<sound> <total playing time> returns the time remaining for the specified impulse sound based on <total playing time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_language_time",
	['sound'],
	"long",
	"Returns the time remaining for the specified impulse sound. do not call in cutscenes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_stop",
	['sound'],
	"void",
	"Stops the specified impulse sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_stop_object",
	['sound', 'object'],
	"void",
	"Stops the specified impulse sound that's playing on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_3d",
	['sound', 'real', 'real'],
	"void",
	"<sound> <azimuth> <scale> at the sound's minimum distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_mark_as_outro",
	['sound'],
	"void",
	"Marks a sound as outro (meaning it plays past an unskipped cinematic)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_preload_dialogue_sounds",
	['string'],
	"void",
	"<dialogue> preloads the dialogue tag so the sounds it refer to don't hitch in the dialog view",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_max_time",
	['sound'],
	"long",
	"Returns the maximum playing time in ticks for the specified sound tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_sound_subtitle",
	['sound'],
	"real",
	"Play the subtitle for the specified sound tag without playing the sound itself. returns the sound duration in seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_start",
	['sound_event'],
	"void",
	"Start a music piece with this event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_stop",
	['sound_event'],
	"void",
	"Stop a music piece with this event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_set_state",
	['sound_event'],
	"void",
	"Set music state with this event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_trigger",
	['sound_event'],
	"void",
	"Plays a music event (but this event is not saved for restore)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"music_override_custom_soundtrack",
	['boolean'],
	"void",
	"Temporarily overrides custom user soundtrack (for cinematics/vignettes/etc)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_set_state",
	['sound_event'],
	"void",
	"Sends a state event. will be restored from save",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voiceover_play",
	['long'],
	"boolean",
	"Plays the nth entry in the current level's voiceover tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voiceover_stop",
	[],
	"void",
	"Stops playing any active voiceover sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_predict",
	['looping_sound'],
	"void",
	"Your mom",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start",
	['looping_sound', 'object', 'real'],
	"void",
	"Plays a looping sound from the specified source object (or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_marker",
	['looping_sound', 'object', 'string_id', 'real'],
	"void",
	"Plays a looping sound from the specified source object and marker(or none), with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_stop",
	['looping_sound'],
	"void",
	"Stops the specified looping sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_stop_object",
	['looping_sound', 'object'],
	"void",
	"Stops the specified looping sound playing on the given source object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_stop_immediately",
	['looping_sound'],
	"void",
	"Stops the specified looping sound immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_set_scale",
	['looping_sound', 'real'],
	"void",
	"Changes the scale of the sound (which should affect the volume) within the range 0 to 1",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_set_alternate",
	['looping_sound', 'boolean'],
	"void",
	"Enables or disables the alternate loop/alternate end for a looping sound",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_loop_spam",
	[],
	"void",
	"Start all loaded looping sounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_show_channel",
	['string', 'boolean'],
	"void",
	"Shows/hides sound classes w/ substring in debug_sound_channels view",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_debug_sound_start",
	['string', 'boolean'],
	"void",
	"Shows/hides when sounds of sound classes w/ substring start",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sounds_enable",
	['string', 'boolean'],
	"void",
	"Enables or disables all sound classes matching the substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_set_gain",
	['string', 'real', 'short'],
	"void",
	"Changes the gain on the specified sound class(es) to the specified gain over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_set_gain_db",
	['string', 'real', 'short'],
	"void",
	"Changes the gain on the specified sound class(es) to the specified gain(db) over the specified number of ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_class_enable_ducker",
	['string', 'boolean'],
	"void",
	"Enables or disables the ducker on all sound classes matching the substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_start_global_effect",
	['string_id', 'real'],
	"void",
	"Start a global effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_start_timed_global_effect",
	['string_id', 'real', 'real'],
	"void",
	"Start a global sound effect for a given amount of time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_stop_global_effect",
	['string_id'],
	"void",
	"Stop a global effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_enable_acoustic_palette",
	['string_id'],
	"void",
	"Reenable a disabled acoustic palette",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_disable_acoustic_palette",
	['string_id'],
	"void",
	"Disable an acoustic palette",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_force_alternate_state",
	['vehicle', 'boolean'],
	"void",
	"Forces alternate state for selected vehicle (like deploying a wolverine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_auto_turret",
	['vehicle', 'trigger_volume', 'real', 'real', 'real'],
	"void",
	"Sets the specified trigger volume and parameters for an auto turret",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_hover",
	['vehicle', 'boolean'],
	"void",
	"Stops the vehicle from running real physics and runs fake hovering physics instead",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_start_trick",
	['vehicle', 'long'],
	"void",
	"Make a vehicle start a trick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_count_bipeds_killed",
	['vehicle'],
	"long",
	"Returns how many people this vehicle has killed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"vehicle_ignore_damage_knockback",
	['vehicle', 'boolean'],
	"void",
	"Stops the vehicle from getting knocked around by damage",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_ragdoll",
	['unit'],
	"void",
	"Given a dead biped, turns on ragdoll",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"water_float_reset",
	['object'],
	"void",
	"Allows an object to continue floating",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_training_text",
	['boolean'],
	"void",
	"True turns on scripted training text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_training_text",
	['string_id'],
	"void",
	"Sets the string id fo the scripted training text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_enable_training",
	['boolean'],
	"void",
	"True turns training on, false turns it off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_night_vision",
	[],
	"void",
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_crouch",
	[],
	"void",
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_stealth",
	[],
	"void",
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_equipment",
	[],
	"void",
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_activate_jump",
	[],
	"void",
	"Guess",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_training_reset",
	['controller'],
	"void",
	"Resets all player training data",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object",
	['object', 'boolean'],
	"void",
	"Turns on/off a navpoint tracking an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_named",
	['object', 'string_id'],
	"void",
	"Turns on a navpoint tracking an object with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_named_with_string",
	['object', 'string_id', 'string_id'],
	"void",
	"Turns on a navpoint tracking an object with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_for_player",
	['player', 'object', 'boolean'],
	"void",
	"Turns on/off a navpoint tracking an object for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_for_player_named",
	['player', 'object', 'string_id'],
	"void",
	"Turns on a navpoint tracking an object with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_object_for_player_named_with_string",
	['player', 'object', 'string_id', 'string_id'],
	"void",
	"Turns on a navpoint tracking an object with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_object_set_vertical_offset",
	['object', 'real'],
	"void",
	"Set the vertical offset in world units for a tracked object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_object_set_on_radar",
	['object', 'boolean', 'boolean'],
	"void",
	"Set the object on the radar for a tracked object: first bool is for enable/disable, second is to show extended range in radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_objects_of_type",
	['object_definition', 'string_id', 'boolean'],
	"void",
	"Mark all of these objects with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_object",
	['object'],
	"boolean",
	"Checks if tracking is on for an object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_object_for_player",
	['player', 'object'],
	"boolean",
	"Checks if tracking is on for an object for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag",
	['cutscene_flag', 'boolean'],
	"void",
	"Turns on/off a navpoint tracking a cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_named",
	['cutscene_flag', 'string_id'],
	"void",
	"Turns on a navpoint tracking a cutscene flag with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_named_with_string",
	['cutscene_flag', 'string_id', 'string_id'],
	"void",
	"Turns on a navpoint tracking a cutscene flag with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_for_player",
	['player', 'cutscene_flag', 'boolean'],
	"void",
	"Turns on/off a navpoint tracking a cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_for_player_named",
	['player', 'cutscene_flag', 'string_id'],
	"void",
	"Turns on a navpoint tracking a cutscene flag with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_flag_for_player_named_with_string",
	['player', 'cutscene_flag', 'string_id', 'string_id'],
	"void",
	"Turns on a navpoint tracking a cutscene flag with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_cutscene_flag_set_vertical_offset",
	['cutscene_flag', 'real'],
	"void",
	"Set the vertical offset in world units for a chud_track_cutscene_flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_cutscene_flag_set_on_radar",
	['cutscene_flag', 'boolean', 'boolean'],
	"void",
	"Set the object on the radar for a tracked flag: first bool is for enable/disable, second is to show extended range in radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_flag",
	['cutscene_flag'],
	"boolean",
	"Checks if tracking is on for a cutscene flag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_flag_for_player",
	['player', 'cutscene_flag'],
	"boolean",
	"Checks if tracking is on for a cutscene flag for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_scripting_force_enemy_always_on",
	['boolean'],
	"void",
	"Forces the enemy navpoints to always be on: bool is for enable/disable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show",
	['boolean'],
	"void",
	"Hides/shows the whole hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_messages",
	['boolean'],
	"void",
	"Hides/shows hud text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_radar",
	['boolean'],
	"void",
	"Hides/shows the radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_crosshair",
	['boolean'],
	"void",
	"Hides/shows the crosshair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_shield",
	['boolean'],
	"void",
	"Hides/shows the shield bar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_weapon",
	['boolean'],
	"void",
	"Hides/shows the weapon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_navpoints",
	['boolean'],
	"void",
	"Hides/shows nav points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_toast_commendations",
	['boolean'],
	"void",
	"Hides/shows toast commendations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_fanfares",
	['boolean'],
	"void",
	"Hides/shows fanfare messages",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_play_global_animtion",
	['string_id'],
	"void",
	"Adds an animation to play on the whole hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_stop_global_animtion",
	['string_id'],
	"void",
	"Removes an animation played on the whole hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_show_medal_posting_ui",
	['boolean'],
	"void",
	"Hides/shows hud messages related to attaining a medal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_set_rampancy_intensity",
	['player', 'real'],
	"void",
	"Sets the intensity of cortana's rampancy",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_play_pip",
	['string'],
	"void",
	"Depricated: use hud_play_pip_from_tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hud_play_pip_from_tag",
	['bink_definition'],
	"void",
	"Plays a pip video from a bink tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_screen_training",
	['player', 'string_id'],
	"void",
	"Hides/shows the training tip in the chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_cinematic_fade",
	['real', 'real'],
	"void",
	"Parameter 1 is how, parameter 2 is when",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show",
	['boolean'],
	"void",
	"Hides/shows the entire chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_crosshair",
	['boolean'],
	"void",
	"Hides/shows the crosshair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_shield",
	['boolean'],
	"void",
	"Hides/shows the shield",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_grenades",
	['boolean'],
	"void",
	"Hides/shows the grenade hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_messages",
	['boolean'],
	"void",
	"Hides/shows the chud messages",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_motion_sensor",
	['boolean'],
	"void",
	"Hides/shows the motion sensor chud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cls",
	[],
	"void",
	"Clears console text from the screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_spam_suppression_enable",
	['boolean'],
	"void",
	"Enables or disables the suppression of event spamming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_show",
	['string'],
	"void",
	"Highlights all error geometry with a name that includes the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_hide",
	['string'],
	"void",
	"Hides all error geometry with a name that includes the given substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_show_all",
	[],
	"void",
	"Highlights all error geometry",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_hide_all",
	[],
	"void",
	"Hides all error geometry",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"error_geometry_list",
	[],
	"void",
	"Prints out a list of all error geometry types and counts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_translation",
	['real', 'real', 'real'],
	"void",
	"<x> <y> <z>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rotation",
	['real', 'real', 'real'],
	"void",
	"<yaw> <pitch> <roll>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rumble",
	['real', 'real'],
	"void",
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_start",
	['real', 'real'],
	"void",
	"<max_intensity> <attack time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_stop",
	['real'],
	"void",
	"<decay>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_translation_for_player",
	['player', 'real', 'real', 'real'],
	"void",
	"<x> <y> <z>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rotation_for_player",
	['player', 'real', 'real', 'real'],
	"void",
	"<yaw> <pitch> <roll>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_set_max_rumble_for_player",
	['player', 'real', 'real'],
	"void",
	"<left> <right>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_start_for_player",
	['player', 'real', 'real'],
	"void",
	"<max_intensity> <attack time>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_effect_stop_for_player",
	['player', 'real'],
	"void",
	"<decay>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"time_code_show",
	['boolean'],
	"void",
	"Shows the time code timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"time_code_start",
	['boolean'],
	"void",
	"Starts/stops the time code timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"time_code_reset",
	[],
	"void",
	"Resets the time code timer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_atmosphere_fog",
	['boolean'],
	"void",
	"Enable/disable atmosphere fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motion_blur",
	['boolean'],
	"void",
	"Enable/disable motion blur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"antialias_blur",
	['boolean'],
	"void",
	"Enable/disable antialias blur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_weather",
	['boolean'],
	"void",
	"Enable/disable atmosphere fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_patchy_fog",
	['boolean'],
	"void",
	"Enable/disable patchy fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_planar_fog",
	['boolean'],
	"void",
	"Enable/disable planar fog",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motion_blur_enabled",
	[],
	"boolean",
	"Check if motion blur is enabled",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_mode",
	['long'],
	"void",
	"Set morphological antialiasing mode (0 = disable, 1 = color, 2 = depth, 3 = color + depth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_color_exponent",
	['real'],
	"void",
	"Set morphological antialiasing color exponent",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_color_threshold",
	['real'],
	"void",
	"Set morphological antialiasing color threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_depth_threshold",
	['real'],
	"void",
	"Set morphological antialiasing depth threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_search_steps",
	['long'],
	"void",
	"Set morphological antialiasing maximum search steps",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mlaa_separate_generate",
	['boolean'],
	"void",
	"Set morphological antialiasing to separate the generate pass into horizontal / vertical",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_has_skills",
	[],
	"boolean",
	"Are you the best?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_has_mad_secret_skills",
	['long'],
	"void",
	"You are the best!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_invert_look",
	[],
	"void",
	"Invert look on all attached controllers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_look_speed",
	['short'],
	"void",
	"Set look speed for all attached controllers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_invert_look",
	['player'],
	"void",
	"Invert player's look inversion setting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"user_interface_controller_get_last_level_played",
	['short'],
	"long",
	"Returns index of last completed solo level for profile index passed in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"user_interface_hud_show_ammo_navpoints",
	['boolean'],
	"void",
	"Overrides ui-globals tag to show/hide navpoints on ammo sources when you need ammo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_look_inverted",
	['controller', 'boolean'],
	"void",
	"Set look inversion for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_vibration_enabled",
	['controller', 'boolean'],
	"void",
	"Set vibration for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_flight_stick_aircraft_controls",
	['controller', 'boolean'],
	"void",
	"Set airrcraft flight stick controls for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_auto_center_look",
	['controller', 'boolean'],
	"void",
	"Set auto center look for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_crouch_lock",
	['controller', 'boolean'],
	"void",
	"Set crouch lock for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_southpaw",
	['controller', 'boolean'],
	"void",
	"Set southpaw for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_clench_protection",
	['controller', 'boolean'],
	"void",
	"Set clench protection look for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_button_preset",
	['controller', 'button_preset'],
	"void",
	"Set button preset for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_custom_button",
	['controller', 'long', 'long'],
	"void",
	"Set custom button for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_joystick_preset",
	['controller', 'joystick_preset'],
	"void",
	"Set joystick preset for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_look_sensitivity",
	['controller', 'short'],
	"void",
	"Set look sensitivity for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_single_player_levels",
	['controller'],
	"void",
	"<controller> unlock all single player levels for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_lock_single_player_levels",
	['controller'],
	"void",
	"<controller> lock all single player levels for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_skulls",
	['controller'],
	"void",
	"<controller> unlock all campaign skulls for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_lock_skulls",
	['controller'],
	"void",
	"<controller> lock all campaign skulls for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_unlock_models",
	['controller'],
	"void",
	"<controller> unlock all model permutations for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_lock_models",
	['controller'],
	"void",
	"<controller> lock all model permutations for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_single_player_level_completed",
	['controller', 'long', 'boolean', 'game_difficulty', 'boolean'],
	"void",
	"<controller> <level index> <co-op> <difficulty> <completed> set the single player levels completed state for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_primary_change_color",
	['controller', 'player_color'],
	"void",
	"Set primary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_secondary_change_color",
	['controller', 'player_color'],
	"void",
	"Set secondary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_tertiary_change_color",
	['controller', 'player_color'],
	"void",
	"Set tertiary color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_primary_emblem_color",
	['controller', 'player_color'],
	"void",
	"Set primary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_secondary_emblem_color",
	['controller', 'player_color'],
	"void",
	"Set secondary change color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_background_emblem_color",
	['controller', 'player_color'],
	"void",
	"Set tertiary color for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_player_character_type",
	['controller', 'player_model_choice'],
	"void",
	"Set player character type for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_emblem_info",
	['controller', 'short', 'short'],
	"void",
	"Set emblem for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_voice_output_setting",
	['controller', 'voice_output_setting'],
	"void",
	"Set voice output setting for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_subtitle_setting",
	['controller', 'subtitle_setting'],
	"void",
	"Set subtitle setting for specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_nag_message_data",
	['controller', 'long', 'long', 'long', 'long'],
	"void",
	"<controller> <last global nag msg id> <last per user nag msg id> <last global nag msg view count> <last per-user nag msg view count>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_temporary_users_always_attached",
	['boolean'],
	"void",
	"Toggle pretending that temporary users' controllers are always attached",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_new_user_experience",
	['controller', 'boolean'],
	"void",
	"<controller> set if this controller will get the new user experience",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_initial_bonus_toast",
	['controller', 'boolean'],
	"void",
	"<controller> set if this controller has seen the 5000 initial credits toast",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_loyalty_bonus_toast",
	['controller', 'currency_type', 'short'],
	"void",
	"<controller> <currency type> <bonus> act as if this controller was awarded a loyalty bonus from the lsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_generic_bonus_toast",
	['controller', 'currency_type', 'short'],
	"void",
	"<controller> <currency type> <bonus> act as if this controller was awarded a generic bonus from the lsp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_unsignedin_user",
	['controller', 'boolean'],
	"void",
	"Toggle controller as unsigned-in user",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_display_storage_device_selection",
	['controller'],
	"void",
	"Display storage device selection ui for the specified controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"font_cache_bitmap_save",
	['string'],
	"void",
	"Save font cache bitmap to targa file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_load_main_menu",
	[],
	"void",
	"Loads the main menu screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_text_bounds",
	['boolean'],
	"void",
	"Toggle rendering of ui text boundaries",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_text_font",
	['boolean'],
	"void",
	"Toggle display of ui text font",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_show_title_safe_bounds",
	['boolean'],
	"void",
	"Toggle display of title safe boundary",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_debug_element_bounds",
	['boolean'],
	"void",
	"Toggle rendering of widget tag block bounds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_memory_dump",
	['string'],
	"void",
	"Dump the ui memory tracked allocations to a specified file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ui_time_scale_step",
	['real'],
	"void",
	"Move the ui time forward by a specified amount on next tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"xoverlapped_debug_render",
	['boolean'],
	"void",
	"Toggle display a list of active xoverlapped tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_target_platform",
	['string'],
	"void",
	"Set target platform for shader compiling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_shader_pipeline",
	['string'],
	"void",
	"Set valid part of pipeline for compiling",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_filter_shader_type",
	['string'],
	"void",
	"Skip compiling for one specifical type of templated shader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"shader_compile_filter_category_option",
	['string', 'string'],
	"void",
	"Skip compiling for one specifical combination of category and option for templated shader",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_force_user_image_upload",
	[],
	"void",
	"Disables all live, lsp connectivity, and dirty checks when attempting to upload the user image",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_load_screen",
	['string_id'],
	"void",
	"Load the named screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_reset",
	[],
	"void",
	"Cleans out the halox ui screens and errors",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_start",
	[],
	"void",
	"Tells the window location manager to resume",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_stop",
	[],
	"void",
	"Tells the window location manager to stop bringing up screens on its own",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_post",
	['string_id', 'long', 'boolean'],
	"void",
	"<error_code> <controller_index> <must_be_cleared> sets an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_post_toast",
	['string_id', 'long', 'boolean'],
	"void",
	"<error_code> <controller_index> <must_be_cleared> sets an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_resolve",
	['string_id', 'long'],
	"void",
	"<error_name> <controller_index> resolves an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_error_clear",
	['string_id', 'long'],
	"void",
	"<error_name> <controller_index> clears an error condition in the ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_dialog_show",
	['string_id'],
	"void",
	"<dialog name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"gui_debug_music_state",
	['boolean'],
	"void",
	"Toggle display of ui music state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cc_enable",
	['boolean'],
	"void",
	"Toggle closed captions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cc_test",
	['boolean'],
	"void",
	"Test a line of cc text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_clear",
	[],
	"void",
	"Clears the mission objectives",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show_up_to",
	['long'],
	"void",
	"Show primary campaign objectives 0..n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish_up_to",
	['long'],
	"void",
	"Mark primary campaign objectives 0..n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show",
	['long'],
	"void",
	"Show secondary campaign objective n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish",
	['long'],
	"void",
	"Mark secondary campaign objective n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_unavailable",
	['long'],
	"void",
	"Mark secondary campaign objective n as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_show",
	['long'],
	"void",
	"Show secondary campaign objective n",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_finish",
	['long'],
	"void",
	"Mark secondary campaign objective n as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_unavailable",
	['long'],
	"void",
	"Mark secondary campaign objective n as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_set_string",
	['long', 'string_id'],
	"void",
	"Set the primary campaign objective string into the objectives text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_set_string",
	['long', 'string_id'],
	"void",
	"Set the secondary campaign objective string into the objectives text",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_show_string",
	['string_id'],
	"void",
	"Show secondary campaign objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_finish_string",
	['string_id'],
	"void",
	"Mark secondary campaign objective as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_unavailable_string",
	['string_id'],
	"void",
	"Mark secondary campaign objective as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_show_string",
	['string_id'],
	"void",
	"Show secondary campaign objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_finish_string",
	['string_id'],
	"void",
	"Mark secondary campaign objective as complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objectives_secondary_unavailable_string",
	['string_id'],
	"void",
	"Mark secondary campaign objective as unavailable",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"input_suppress_rumble",
	['boolean'],
	"void",
	"Disable the friggin' rumble",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"input_disable_claw_button_combos",
	['boolean'],
	"void",
	"Disable the claw button combos (for monkey testing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"update_remote_camera",
	[],
	"void",
	"Force synchronization of remote machine camera",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_network_config",
	[],
	"void",
	"Writes a new network configuration file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_game_variant",
	['boolean', 'string'],
	"void",
	"Writes the current game variant to a file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_verify_game_variant",
	['string'],
	"void",
	"Verifies the contents of a packed game variant file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_load_and_use_game_variant",
	['string'],
	"void",
	"Loads the contents of a packed game variant file and submits to networking for use in the current game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_offer_info",
	[],
	"void",
	"Writes a new offer info file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_dump",
	[],
	"void",
	"Dump all network quality statistics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_clear",
	[],
	"void",
	"Clear all network quality statistics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_connection_badness_history",
	['boolean', 'short'],
	"void",
	"Set connection history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_host_badness_history",
	['boolean', 'short'],
	"void",
	"Set host badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_client_badness_history",
	['boolean', 'short'],
	"void",
	"Set client badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_speculative_migration_badness_history",
	['boolean', 'short'],
	"void",
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_squad_bridging_badness_history",
	['boolean', 'short'],
	"void",
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_host_badness_history",
	['boolean', 'short'],
	"void",
	"Set host badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_client_badness_history",
	['boolean', 'short'],
	"void",
	"Set client badness history, true/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_speculative_migration_badness_history",
	['boolean', 'short'],
	"void",
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_quality_set_group_bridging_badness_history",
	['boolean', 'short'],
	"void",
	"True/false, # of bits to set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_maximum_player_count",
	['long'],
	"boolean",
	"Sets the maximum player count for this squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_refuse_all_joins",
	['boolean'],
	"void",
	"Refuses all join requests",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_status_filter",
	['string'],
	"void",
	"Filters the set of network status to display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_ping",
	[],
	"void",
	"Network test: sends a ping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_channel_delete",
	[],
	"void",
	"Network test: deletes all channels",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_delegate_host",
	['long'],
	"void",
	"Network test: delegate host to the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_delegate_leader",
	['long'],
	"void",
	"Network test: delegate leadership to the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_map_name",
	['string'],
	"void",
	"Network test: sets the name of the scenario to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_variant",
	['string_id'],
	"void",
	"Network test: sets the game variant to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_campaign_difficulty",
	['short'],
	"void",
	"Network test: sets the difficulty of the campaign game to play",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_player_color",
	['long'],
	"void",
	"Network test: temporarily sets the color for all local players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_reset_objects",
	[],
	"void",
	"Network test: resets all objects on the map",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_fatal_error",
	[],
	"void",
	"Creates a fatal simulation error",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_machine_name",
	['string'],
	"void",
	"Sets the nickname of your xbox",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_enabled",
	['boolean'],
	"void",
	"Enable/disable all events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppression",
	['boolean'],
	"void",
	"Enable/disable event suppression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppress_display",
	['boolean'],
	"void",
	"Disables console display for events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_display",
	['event'],
	"void",
	"Sets the global event console display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_log",
	['event'],
	"void",
	"Sets the global event log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_debugger",
	['event'],
	"void",
	"Sets the global event debugger display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_global_datamine",
	['event'],
	"void",
	"Sets the global event datamine level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_display",
	['string', 'event'],
	"void",
	"Sets the console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_force_display",
	['string', 'event'],
	"void",
	"Sets the forced console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_log",
	['string', 'event'],
	"void",
	"Sets the log level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_debugger",
	['string', 'event'],
	"void",
	"Sets the debugger display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_debugger_break",
	['string', 'event'],
	"void",
	"Sets the debugger break level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_halt",
	['string', 'event'],
	"void",
	"Sets the halt (assert/crash) level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_category_datamine",
	['string', 'event'],
	"void",
	"Sets the datamine level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_list_categories",
	['string'],
	"void",
	"Lists all categories that exist under a particular category string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_dump_file",
	['string'],
	"void",
	"Dumps all events from the given file to the output",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_logs_snapshot",
	[],
	"void",
	"Copy error files to the error snapshot folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_disable_suppression",
	['boolean'],
	"void",
	"Deprecated(use events_suppression): disable/enable event suppression",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_display_category",
	['event'],
	"void",
	"Deprecated(use events_global_display): sets the global event console display level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_log_category",
	['event'],
	"void",
	"Deprecated(use events_global_log): sets the global event log level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_global_remote_log_category",
	['event'],
	"void",
	"Deprecated(use events_global_datamine): sets the global event datamine level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_display_category",
	['string', 'event'],
	"void",
	"Deprecated(use events_category_display): sets the console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_force_display_category",
	['string', 'event'],
	"void",
	"Deprecated(use events_category_force_display): sets the forced console display level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_debugger_break_category",
	['string', 'event'],
	"void",
	"Deprecated(use events_category_debugger_break): sets the debugger break level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_halt_category",
	['string', 'event'],
	"void",
	"Deprecated(use events_category_halt): sets the halt (assert/crash) level for a named category of network events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"event_list_categories",
	['string'],
	"void",
	"Deprecated(use events_list_categories): lists all categories that exist under a particular category string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_suppress_console_display",
	['boolean'],
	"void",
	"Deprecated(use events_suppress_display): disables console display for events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"events_log_event",
	['event', 'string'],
	"void",
	"Logs an event in the game using the same syntax as the engine's event macro",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie",
	['string'],
	"void",
	"Play a bink movie file directly.  the directory and '_60.bik' is implied.  eg: play_bink_movie('081_crash') will play file bink\\081_crash_60.bik",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie",
	['string', 'long'],
	"void",
	"Play a bink movie file directly with playback flags.  the directory and '_60.bik' is implied.  eg: play_bink_movie('081_crash') will play file bink\\081_crash_60.bik",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie_from_tag",
	['bink_definition'],
	"void",
	"Play a bink movie from a tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_bink_movie_from_tag",
	['bink_definition', 'long'],
	"void",
	"Play a bink movie from a tag with playback flags (from bink_playback.h)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits_skip_to_menu",
	[],
	"void",
	"Plays credits movie, pressing a button will stop credits and launch main menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_credits_unskippable",
	[],
	"void",
	"Plays credits movie, no button press detection",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_time",
	[],
	"long",
	"The number of ticks left in the currently playing bink",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"stop_bink_movie",
	[],
	"void",
	"Stops all bink movie playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_pause",
	['boolean'],
	"void",
	"Pause/unpause bink movie",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_any_loading",
	[],
	"boolean",
	"Is any player bink movie being loaded?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_any_playing",
	[],
	"boolean",
	"Is any player bink movie being played?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_playing",
	[],
	"boolean",
	"Is all players bink movie being played?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_local_loading",
	[],
	"boolean",
	"Is local bink movie being loaded?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bink_is_local_playing",
	[],
	"boolean",
	"Is local bink movie being played?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_mission_segment",
	['string'],
	"void",
	"Sets the mission segment for single player data mine events",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_insert",
	['string'],
	"void",
	"Insert text and camera position in the data mine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_upload",
	[],
	"void",
	"Upload all data mining data files to debug server",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_enable",
	['boolean'],
	"void",
	"Enable/disable data mining",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_flush",
	[],
	"void",
	"Flush any pending data mine data to disk",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_debug_menu_setting",
	['string'],
	"void",
	"Close debug menu and set user experience setting to string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_open_debug_menu",
	[],
	"void",
	"Open debug menu",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_display_mission_segment",
	['boolean'],
	"void",
	"Toggle display of data mine mission segment",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_header_flag",
	['long', 'boolean'],
	"void",
	"Sets the source flags of the data mine header (used for backend bucketing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"data_mine_set_session_tag",
	['string'],
	"void",
	"Tags a datamine session with a label",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_memory_allocators",
	['long', 'short', 'short', 'short', 'long'],
	"void",
	"Performs tests on different memory allocators",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_memory_allocators",
	['long', 'short', 'short', 'short', 'long', 'string'],
	"void",
	"Performs tests on different memory allocators and saves the results",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"display_video_standard",
	[],
	"void",
	"Displays the video standard the game is in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_fake_outgoing_join_type",
	['long', 'long', 'long', 'long'],
	"void",
	"<gui_game_mode [0 .. 14]> <session_game_mode [0 .. 4]> <network_game_type [0 .. 3]> <game_engine_type [0 .. 5]>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_active_screens",
	['long'],
	"void",
	"<arbitrary int> list the current cui screens",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_screen_components",
	['long', 'long'],
	"void",
	"<arbitrary int> <window index> lists widgets in a screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_component_properties",
	['long', 'long', 'string_id'],
	"void",
	"<arbitrary int> <window index> <component_name> lists a component's property names, types and values",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_send_button_press",
	['long', 'long', 'long', 'string'],
	"void",
	"<arbitrary int> <window index> <controller index> <button name> sends the button press to the screen.  use controller index -1 for automatically guessing the right controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_string_id",
	['long', 'long', 'string_id', 'string_id', 'string_id', 'string_id'],
	"void",
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_long",
	['long', 'long', 'string_id', 'string_id', 'string_id', 'long'],
	"void",
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_boolean",
	['long', 'long', 'string_id', 'string_id', 'string_id', 'boolean'],
	"void",
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_text",
	['long', 'long', 'string_id', 'string_id', 'string_id', 'string'],
	"void",
	"<command_index> <window_index> <list_name> <list_data_name> <property_name> <property_value> triggers the list item who's column's value matches the specified one",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_instanced_list_item_by_text",
	['long', 'long', 'long', 'string_id', 'string_id', 'string_id', 'string'],
	"void",
	"<command_index> <window_index> <list_index> <list_name> <list_data_name> <property_name> <property_value> triggers the named item in the matching list (if list_index equals 1, then select the item from the second matching list)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_expand_list_item_by_list_item_index",
	['long', 'long', 'string_id', 'long', 'boolean'],
	"void",
	"<command_index> <window_index> <list_name> <list item index> <expand> expands or collapses the indexed list item",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_list_item_index",
	['long', 'long', 'string_id', 'long'],
	"void",
	"<command_index> <window_index> <list_name> <list item index> directly triggers the indexed list item",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_invoke_list_item_by_list_item_name",
	['long', 'long', 'string_id', 'string_id'],
	"void",
	"<command_index> <window_index> <list_name> <list item index> directly triggers the named list item",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_list_item_names",
	['long', 'string_id'],
	"void",
	"<window_index> <list_name> gives the list of available list item names for the list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_screen_size",
	['string_id', 'boolean'],
	"void",
	"<screen_name> <verbose detail> displays the total size in content of the named screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_active_screen_size",
	['long', 'boolean'],
	"void",
	"<window_index> <verbose detail> displays the total size in content of the current screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_total_screens_size",
	['boolean'],
	"void",
	"<verbose detail> displays the total size in content of all ui content loaded for the current level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_show_stats",
	['long'],
	"void",
	"<window index> shows summary stats for the ui system and current screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_redraw_all_portraits",
	[],
	"void",
	"Redraws all the player portraits",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_get_screen_strings",
	['long'],
	"void",
	"<window_index> list the current active screens and path to references",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NetworkDisallowMatchJoinInProgress",
	['boolean'],
	"void",
	"Disallow (or un-disallow) late joins",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flag_new",
	['string', 'string'],
	"void",
	"<name> <description>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flag_new_at_look",
	['string', 'string'],
	"void",
	"<name> <description>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_clear",
	[],
	"void",
	"Erases all comment flags when not in editor (sapien)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_default_name",
	['string'],
	"void",
	"<default comment flag name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_default_comment",
	['string'],
	"void",
	"<default comment flag description>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"flags_set_filter",
	['string'],
	"void",
	"<flag name filter>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now",
	['string'],
	"void",
	"Uploads files for bug <name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now_lite",
	['string'],
	"void",
	"Uploads files (w/ no minidump) for bug <name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now_auto",
	['boolean'],
	"void",
	"Uploads bug files, auto named <include_minidump>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bug_now_on_next_kill",
	['string'],
	"void",
	"Uploads files for a bug <name> for the next kill that could produce an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_list_children",
	['object', 'object_definition'],
	"object_list",
	"Returns list of child objects by definition",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_selected_actor_jump",
	['real', 'real'],
	"void",
	"Makes the currently selected actor jump x wus forward and y wus up",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_loaded_tags",
	[],
	"void",
	"Dump a list of open tags to <map_name>_tags.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_start",
	['string_id'],
	"void",
	"<name> starts up the specified interpolator - uses the name of the interpolator defined in tags, not scenario_interpolatorxx!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_stop",
	['string_id'],
	"void",
	"<name> stops the progression of the specified interpolator - uses the name of the interpolator defined in tags, not scenario_interpolatorxx!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_stop_all",
	[],
	"void",
	"Stops all interpolators",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_dump",
	['string_id'],
	"void",
	"<name> prints out the status of the specified interpolator",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"interpolator_dump_all",
	[],
	"void",
	"Prints out the status of all defined interpolators in the scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_pc_runtime_language",
	['string'],
	"void",
	"Sets the pc language from a string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_clone_players_weapon",
	['object', 'string_id', 'string_id'],
	"void",
	"Clone the first player's most reasonable weapon and attach it to the specified object's marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_move_attached_objects",
	['object', 'string_id', 'string_id', 'string_id'],
	"void",
	"Move the object's children attached to the first marker to the second marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_save_cinematic_skip",
	[],
	"void",
	"Don't use this, except in one place",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_outro_start",
	[],
	"void",
	"Flag this cutscene as an outro cutscene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_enable_ambience_details",
	['boolean'],
	"void",
	"Enable/disable ambience details in cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_suppress_ambience_update_on_revert",
	[],
	"void",
	"Call this when transitioning between two cinematics so ambience won't fade in between the skips",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_autoexposure_enable",
	['boolean'],
	"void",
	"Toggle autoexposure",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_full",
	['real', 'real', 'real', 'real', 'real'],
	"void",
	"Animate exposure from <initial> to <final> stops using <initial> to <final> opacity in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_fade_in",
	['real', 'real'],
	"void",
	"Fade to animated exposure <stops> in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_fade_out",
	['real'],
	"void",
	"Fade to default exposure settings in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure",
	['real', 'real'],
	"void",
	"Fade to animated exposure <stops> in <seconds>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_autoexposure_instant",
	['long'],
	"void",
	"Instantly adopt auto exposure values in the next n frames",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_exposure_set_environment_darken",
	['real'],
	"void",
	"Set environmental darkening",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_depth_of_field_enable",
	['boolean'],
	"void",
	"Turns depth of field on and off",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_depth_of_field",
	['real', 'real', 'real', 'real'],
	"void",
	"Animate depth of field, in focus from <near> to <far>, with depth of field <depth>, in <ticks>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth",
	['real'],
	"void",
	"Interpolate depth of field to <depth>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_near",
	['real'],
	"void",
	"Interpolate depth of field near aperture to <depth>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_far",
	['real'],
	"void",
	"Interpolate depth of field far aperture to <depth>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_blur_near",
	['real'],
	"void",
	"Interpolate depth of field near blur to <blur>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_focus_depth_blur_far",
	['real'],
	"void",
	"Interpolate depth of field far blur to <blur>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_dof_blur_animate",
	['real', 'real'],
	"void",
	"Interpolate depth of field maximum blur to <blur> in <ticks>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lightmap_shadow_disable",
	[],
	"void",
	"Turn off lightmap shadow in cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_lightmap_shadow_enable",
	[],
	"void",
	"Turn on lightmap shadow in cinematics",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_player_count_by_team",
	['mp_team'],
	"long",
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_players_by_team",
	['mp_team'],
	"object_list",
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_active_player_count_by_team",
	['mp_team'],
	"long",
	"Given a team index, returns an object list containing all living player objects belonging to that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"deterministic_end_game",
	[],
	"void",
	"End game deterministically, by inserting a simulation queue event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_game_won",
	['mp_team'],
	"void",
	"Given a team index, declares the game a victory for that team and a loss for all others",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_respawn_override_timers",
	['mp_team'],
	"void",
	"Causes all players on the specified team waiting to respawn (due to timer) to respawn immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_ai_allegiance",
	['team', 'mp_team'],
	"void",
	"Causes an allegiance to be formed between an ai squad team and a multiplayer team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_allegiance",
	['mp_team', 'mp_team'],
	"void",
	"Create an allegiance between two multiplayer teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_started",
	[],
	"boolean",
	"Used to determine if the mp game is in the active-round phase or not",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_end_with_winning_player",
	['player'],
	"void",
	"Ends the current round with a winning player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_end_with_winning_team",
	['mp_team'],
	"void",
	"Ends the current round with a winning team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_round_end",
	[],
	"void",
	"Ends the current round with no winning team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_scripts_reset",
	[],
	"void",
	"On the host in a distributed game, resets the scripts (but not internal hs globals)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_file_set_backend",
	['string'],
	"void",
	"Override the tag file system backend",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_debug_goal_object_boundary_geometry",
	['boolean'],
	"void",
	"Toggle debug geometry for multiplayer goal objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mp_dump_candy_monitor_state",
	[],
	"void",
	"Dumps the current candy monitor state to a file on disk",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_logging",
	['boolean'],
	"void",
	"Enable/disable determinism logging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_set_trace_flags",
	['long'],
	"void",
	"Set which determinism debugging traces should be turned on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_game_state_checksum",
	['boolean'],
	"void",
	"Enable/disable determinism checkpoints",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_trace",
	['boolean'],
	"void",
	"Enable determinism tracing",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_set_consumer_sample_level",
	['string', 'long'],
	"void",
	"Sets sample level for a consumer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_log_compare_log_files",
	['string', 'string'],
	"void",
	"Comares determinism log files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_enable_log_file_comparision_on_oos",
	['boolean'],
	"void",
	"Enables/disables determinism log file comparision on oos",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"determinism_debug_manager_SetFilePath",
	['string'],
	"void",
	"Sets an alternative base directory for determinism files",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_play",
	['controller', 'string'],
	"void",
	"Plays a saved film for given controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_play_last",
	[],
	"void",
	"Play back last recorded saved film for given controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_disable_version_checking",
	['boolean'],
	"void",
	"Disable saved film version checking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_toggle_debug_saving",
	['boolean'],
	"void",
	"Toggle saving of last film to the debug output directory automatically after each game level",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_films_show_timestamp",
	['boolean'],
	"void",
	"Toggle showing timestamp for saved film playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"mover_set_program",
	['object', 'short'],
	"boolean",
	"Set the motor program of the given mover object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"floating_point_exceptions_enable",
	['boolean'],
	"void",
	"Enables/disables floating point exceptions",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_reload_force",
	['string'],
	"void",
	"Rather than force a painful xsync to test xsync, allow me to fake a tag_reload",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_unload_force",
	['string'],
	"void",
	"Call tag_unload",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_load_force",
	['string'],
	"void",
	"Call tag_load",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bink_movie",
	['string', 'long'],
	"void",
	"Predict a bink movie file directly with playback flags. the directory and '_60.bik' is implied. eg: predict_bink_movie('081_crash', 0) will play file bink\\081_crash_60.bik",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"predict_bink_movie_from_tag",
	['bink_definition', 'long'],
	"void",
	"Predict a bink movie from tag with playback flags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_mode",
	['unit', 'long'],
	"void",
	"<unit_index> <mode_index> sets user's camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_flying_cam_at_point",
	['unit', 'cutscene_camera_point'],
	"void",
	"<unit_index> <camera_point> sets a flying camera perspective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_target",
	['unit', 'object'],
	"void",
	"<unit_index> <object_index> sets the current camera's target",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"camera_set_orbiting_cam_at_target_relative_point",
	['unit', 'string_id', 'real', 'real', 'real'],
	"void",
	"<unit_index> <target_marker_name> <relative_x_position> <relative_y_position> <relative_z_position> sets an orbiting camera pointing at a given marker from an object relative point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"director_cycle_debug_camera",
	['long'],
	"void",
	"<user index>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_coop_player_count",
	[],
	"long",
	"Returns the number of coop players active in game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_force_mode",
	['string_id'],
	"void",
	"Force your will upon the player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"string_id_name",
	['long'],
	"void",
	"Prints the name of the string id to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"find",
	['string'],
	"void",
	"Prints any hs command matching the string passed in",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_recycling_volume",
	['trigger_volume', 'long', 'long'],
	"void",
	"Removes garbage in specified trigger volume to a max count over n seconds syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_recycling_volume_by_type",
	['trigger_volume', 'long', 'long', 'long'],
	"void",
	"Removes garbage objects matching the type mask in the specified trigger volume that are over the max count allowed in the volume over n seconds. 1=biped, 2=vehicle, 4=weapon, 8=equipment, and 1024=crate. add values together for combos, zero means all types syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)> <type_mask>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_offscreen_recycling_volume",
	['trigger_volume', 'long', 'long'],
	"void",
	"Removes garbage in specified trigger volume to a max count over n seconds syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_offscreen_recycling_volume_by_type",
	['trigger_volume', 'long', 'long', 'long'],
	"void",
	"Removes garbage objects matching the type mask in the specified trigger volume that are over the max count allowed in the volume over n seconds. 1=biped, 2=vehicle, 4=weapon, 8=equipment, and 1024=crate. add values together for combos, zero means all types syntax: <trigger_volume> <max_count> <time_to_collect (integer secs)> <type_mask>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_set_per_frame_publish",
	['boolean'],
	"void",
	"Turns on/off per frame resource publish (stress testing)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_recycling_clear_history",
	[],
	"void",
	"Clear object recycling history",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_cinematics_script",
	[],
	"void",
	"Dump the cinematic script to cinematic_dump.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"global_preferences_clear",
	[],
	"void",
	"Clears all game preference information",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_set_storage_subdirectory",
	['string'],
	"void",
	"<subdirectory> the default is the build number or 'untracked'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_set_storage_user",
	['string'],
	"void",
	"<user> use the network file stored on untracked\\<user>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_run_locally",
	['boolean'],
	"void",
	"Run off local storage files e:\\reach\\storage\\title\\<title_id>\\",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status_line_dump",
	[],
	"void",
	"Dumps active status_lines to system_log.txt",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_get",
	[],
	"long",
	"Returns current game tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate_get",
	[],
	"long",
	"Returns game tick rate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_tick_rate_scalar_get",
	[],
	"long",
	"Returns game_tick_rate/retail_tick_rate",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"loop_it",
	['string'],
	"void",
	"Runs the expression at most once per tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"loop_clear",
	[],
	"void",
	"Runs the expression at most once per tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status_lines_enable",
	['string'],
	"void",
	"Enables status_lines that were initialized with identifiers that match the input substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"status_lines_disable",
	['string'],
	"void",
	"Disables status_lines that were initialized with identifiers that match the input substring",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"on_target_platform",
	[],
	"boolean",
	"Returns true if the game thinks it's running on the target platform",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_game_set_player_standing",
	['string', 'long'],
	"void",
	"Set's a player's standing by gamertag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_get_game_id",
	[],
	"void",
	"Prints the id of the game to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"generate_rsa_2048_key_pair",
	[],
	"void",
	"Generates an rsa key pair",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"create_secure_test_file",
	[],
	"void",
	"Generates a compressed encrypted test file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_set_playback_game_speed",
	['real'],
	"boolean",
	"Set the saved film playback speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"designer_zone_sync",
	[],
	"void",
	"Synchronizes global objects with loaded designer zones",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_designer_zone",
	['designer_zone'],
	"void",
	"Dump interesting info about a designer zone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_always_active",
	['object', 'boolean'],
	"void",
	"Sets/unsets the object always active flag to ignore pvs changes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_film_tick",
	['long'],
	"void",
	"Seeks to a film tick",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_film_timestamp",
	['real'],
	"void",
	"Seeks to a film time",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_is_active",
	['any_tag_not_resolving'],
	"boolean",
	"Returns true/false if you can create this tag with the active zones",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_set_incremental_publish",
	['boolean'],
	"void",
	"Turns on/off incremental resource publish (prediction)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_enable_optional_caching",
	['boolean'],
	"void",
	"Turns on/off optional resource prediction",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_active_resources",
	[],
	"void",
	"Blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_persistent",
	['object', 'boolean'],
	"void",
	"<object_index> <true/false> prevent this object from being garbage collected",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"display_zone_size_estimates",
	['boolean'],
	"void",
	"Display zone size estimates hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"report_zone_size_estimates",
	[],
	"void",
	"Dump zone size estimates to design report log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_disconnect_squad",
	[],
	"void",
	"Disconnects the squad session",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_disconnect_group",
	[],
	"void",
	"Disconnects the group session",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_clear_squad_session_parameter",
	['long'],
	"void",
	"Clears a squad session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_clear_group_session_parameter",
	['long'],
	"void",
	"Clears a group session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_life_cycle_pause",
	['string', 'boolean'],
	"void",
	"Pauses the life cycle in the specified state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_test_life_cycle_display_states",
	[],
	"void",
	"Display the life cycle states",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"overlapped_display_task_descriptions",
	[],
	"void",
	"Displays all tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"overlapped_task_inject_error",
	['string', 'boolean'],
	"void",
	"Inject error for tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"decorators_split",
	['long', 'real'],
	"void",
	"Duplicates decorator set <index> and moves <percentage> of the decorators into it",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bandwidth_profiler_enable",
	['boolean'],
	"void",
	"Enables bandwidth profiler",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"bandwidth_profiler_set_context",
	['boolean'],
	"void",
	"Sets bandwidth profiler context",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_enabled",
	['boolean'],
	"void",
	"Enable/disable the priority display system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_object_names",
	['boolean'],
	"void",
	"Enable/disable object name display",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_machine_filter",
	[],
	"void",
	"Set machine filter to output user 0's currently watched player (selected via follow cam in film)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_priority_scope_tick",
	[],
	"void",
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_priority_scope_second_worst",
	[],
	"void",
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_priority_scope_second_best",
	[],
	"void",
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_color_by_relevance",
	[],
	"void",
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_color_by_update_period",
	[],
	"void",
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_priority_display_set_color_by_final_priority",
	[],
	"void",
	"Coder feature",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"overlapped_task_pause",
	['string', 'boolean'],
	"void",
	"Pause tasks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_leaderboard_set_user_stats",
	['long', 'real', 'real', 'long', 'long', 'long'],
	"void",
	"Slams user leaderboard values locally",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_leaderboard_set_user_game_stats",
	['long', 'long', 'long', 'long', 'long'],
	"void",
	"Slams more user stats",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_build_map_variant",
	['boolean', 'string'],
	"void",
	"Writes the current map variant to a file in .bin format (same as .mvar)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_verify_map_variant",
	['string'],
	"void",
	"Verifies the contents of a packed map variant file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_load_and_use_map_variant",
	['string'],
	"void",
	"Reads a built map variant and slams it into the squad session",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"write_current_map_variant",
	['boolean', 'string'],
	"void",
	"Writes the current map variant to a file in .mvar format (same as .bin). see map_variants subdirectory on your devkit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"read_map_variant_and_make_current",
	['string'],
	"void",
	"Reads a map variant from a .mvar file in the map_variants subdirectory and slams it into the squad session.  can be executed in the lobby",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"report_built_in_map_variant_object_count",
	[],
	"void",
	"Checks that a all objects in the scenario can be placed in the built-in .mvar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"async_set_thread_work_delay_milliseconds",
	['long', 'long'],
	"void",
	"Set an artificial delay time for a specific async thread to test the performance of any asynchronous task work",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_with_effect",
	['looping_sound', 'object', 'real', 'string_id'],
	"void",
	"Plays a looping sound from the specified source object (or none));, with the specified scale and playback effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_set_demand_throttle_to_io",
	['boolean'],
	"void",
	"Turns on/off demand throttling based on io",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_flush_optional",
	[],
	"void",
	"Flushes optional resources",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_simulate_demand",
	['long'],
	"boolean",
	"Simulates resource demand in cache builds by consuming the specified amount of resource memory (while releasing any consumption from previous calls to this function). returns true if successful; otherwise false",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenario_zone_set_streaming_cache_enable",
	['boolean'],
	"void",
	"Turns on/off new beam texture streaming system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_pin_tag_index",
	['long', 'long'],
	"void",
	"Pins a tag and variant to the highest priority for streaming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_unpin_tag_index",
	['long', 'long'],
	"void",
	"Removes the pin on a tag and variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_pin_tag",
	['any_tag_not_resolving', 'long'],
	"void",
	"Pins a tag and variant to the highest priority for streaming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_unpin_tag",
	['any_tag_not_resolving', 'long'],
	"void",
	"Removes the pin on a tag and variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_pin_tag",
	['any_tag_not_resolving'],
	"void",
	"Pins a tag to the highest priority for streaming",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_unpin_tag",
	['any_tag_not_resolving'],
	"void",
	"Removes the pin on a tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streamer_clear_all_pinned_tags",
	[],
	"void",
	"Clears all currently pinned tags",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_performance_throttle",
	['string', 'long', 'real'],
	"void",
	"Sets a default value for a performance throttle for a given number of players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"get_performance_throttle",
	['string', 'long'],
	"real",
	"Gets the value of a performance throttle for a given number of players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate",
	['long'],
	"void",
	"Activates scenario cinematic zone (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_deactivate",
	['long'],
	"void",
	"Deactivates scenario cinematic zone (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate_from_editor",
	['any_tag'],
	"void",
	"Activates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_deactivate_from_editor",
	[],
	"void",
	"Deactivates cinematic zone from tag (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tiling_current",
	[],
	"long",
	"Returns the actual tiling configuration (could have been overridden from the requested configuration)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_limit_lipsync_to_mouth_only",
	['unit', 'boolean'],
	"void",
	"Cinematic lipsync means you can't use all the facial bones, just the mouth",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"dump_active_zone_tags",
	[],
	"void",
	"Blah",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_enable_fast_prediction",
	['boolean'],
	"void",
	"Turns on/off faster prediction, in case i fucked up something",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_start_first_person_custom_animation",
	['unit', 'animation_graph', 'string_id', 'boolean'],
	"boolean",
	"Starts a custom animation playing on a unit (puts away weapon if last parameter is true)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_is_playing_custom_first_person_animation",
	['unit'],
	"boolean",
	"Returns true if the given unit is still playing a custom animation in first person",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_stop_first_person_custom_animation",
	['unit'],
	"void",
	"Ends any custom first person animation running on the unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"prepare_to_switch_to_zone_set",
	['zone_set'],
	"void",
	"Prepare for switch to zone set",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PreparingToSwitchZoneSet",
	[],
	"boolean",
	"Can be polled to check whether the asynchronous memory load started by main_prepare_for_switch_zone_set is complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"EnableMidmissionLoadScreenForDVDOnly",
	['boolean'],
	"void",
	"Sets trigger_midmission_load_screen if any player in the game is in no hdd mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_zone_activate_for_debugging",
	['long'],
	"void",
	"Activates scenario cinematic zone for debugging (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_play_random_ping",
	['unit'],
	"void",
	"Plays a random ping on the unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_fade_out_all_input",
	['real'],
	"void",
	"Fade out all play control over x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_fade_in_all_input",
	['real'],
	"void",
	"Fade in all play control over x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_lock_gaze",
	['player', 'point_reference', 'real'],
	"void",
	"Player turn to face point with max velocity degrees/second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_lock_gaze_marker",
	['player', 'object', 'string_id', 'real'],
	"void",
	"Player turn to face marker with max velocity degrees/second",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_clamp_gaze",
	['player', 'point_reference', 'real'],
	"void",
	"<player> <point> <max angle degrees> force player view to be within give angle of point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_clamp_gaze_marker",
	['player', 'object', 'string_id', 'real'],
	"void",
	"<player> <object> <markername> <max angle degrees> force player view to be withing given angle of object and/or object's marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_unlock_gaze",
	['player'],
	"void",
	"Unlock player from any gaze point or gaze clamp",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_scale_all_input",
	['real', 'real'],
	"void",
	"Scale input to x strength over y seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_tag_reference_get_bink",
	['long'],
	"bink_definition",
	"Retrieve the bink tag from the cinematic system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_set_force_match_configurations",
	['long', 'long', 'long', 'boolean'],
	"void",
	"Sets matchmaking voice options",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_set_force_hud",
	['long', 'long'],
	"void",
	"Sets matchmaking voice hud",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"object_set_custom_animation_speed",
	['object', 'real'],
	"void",
	"If the object is playing a custom animation, scale it to n playback speed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scenery_animation_start_at_frame_loop",
	['scenery', 'animation_graph', 'string_id', 'short'],
	"void",
	"Starts a custom animation playing on a piece of scenery at a specific frame and then loops",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_set_repro_mode",
	['boolean'],
	"void",
	"Set the saved film into repro mode (splitscreen users are created based on the number of splitscreen players that recorded the film)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"font_set_emergency",
	[],
	"void",
	"Sets the font system into emergency mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"biped_force_ground_fitting_on",
	['unit', 'boolean'],
	"void",
	"Force ground fitting on, even during custom animations or movement",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_chud_objective",
	['cutscene_title'],
	"void",
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"chud_show_cinematic_title",
	['player', 'cutscene_title'],
	"void",
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_get_primary_weapon",
	['unit'],
	"weapon",
	"Return the primary weapon of the specified unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_animation_graph",
	['animation_budget_reference'],
	"animation_graph",
	"Get a non resolving reference to a model animation graph budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"budget_resource_get_looping_sound",
	['looping_sound_budget_reference'],
	"looping_sound",
	"Get a non resolving reference to a looping sound budget reference",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_migrate_infanty",
	['ai', 'ai'],
	"void",
	"Migrates the infantry in an encounter into a different squad",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_cinematic_motion_blur",
	['boolean'],
	"void",
	"Enable/disable cinematic motion blur",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_dont_do_avoidance",
	['ai', 'boolean'],
	"void",
	"Set the ai to not do any vector avoidance when flying",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_clean_up",
	['long'],
	"void",
	"Unload the scenario cinematic zone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_cinematic_structure_lighting_enable",
	['boolean'],
	"void",
	"Enable/disable cinematic structure lighting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_cinematic_hologram_lighting_enable",
	['boolean'],
	"void",
	"Enable/disable cinematic hologram lighting",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_erase_inactive",
	['ai', 'short'],
	"void",
	"Erase inactive actors in the given ai index, and any of those actors who become inactive within the next designated ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_survival_cleanup",
	['ai', 'boolean', 'boolean'],
	"void",
	"Activate cure isolation death for the given ai, and optionally delete inactive actors in that group too (ai, on/off, kill inactive)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_enable_stuck_flying_kill",
	['ai', 'boolean'],
	"void",
	"Enable/disable suicide condition for flying vehicles who are 'stuck'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ai_set_stuck_velocity_threshold",
	['ai', 'real'],
	"void",
	"Change the velocity threshold at which we will detect 'stuck' directional flying movement",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"physical_memory_dump",
	[],
	"void",
	"Dumps a record of all physical memory allocations",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"tag_resources_validate_all_pages",
	['boolean'],
	"void",
	"Resource validation every main_loop_body call",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_set_debug_mode",
	['boolean'],
	"void",
	"Puts all cinematic playback into debug mode (automatically generated script function!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_scripting_get_object",
	['long', 'long'],
	"object",
	"Get an object used in a cinematic",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_link_light_object",
	['string_id', 'string_id'],
	"void",
	"Links dynamic light to cinematic object. light must have cinema objects only on",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_unlink_light_object",
	['string_id', 'string_id'],
	"void",
	"Unlinks dynamic light from cinematic object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cinematic_unlink_light",
	['string_id'],
	"void",
	"Unlinks dynamic light from all cinematic objects",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_override_team",
	['long', 'team'],
	"void",
	"Sets the campaign team for a specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_team",
	['long', 'mp_team'],
	"void",
	"Sets the multiplayer-team for a specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_set_stance",
	['unit', 'string_id'],
	"void",
	"Specify the desired stance for this unit",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_stance",
	['string_id'],
	"void",
	"Specify the stance for all players currently in the game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_editor",
	['sound', 'object', 'real'],
	"void",
	"Plays an impulse sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_effect_editor",
	['sound', 'object', 'real', 'string_id'],
	"void",
	"Plays an impulse sound from the specified source object (or none) with the specified scale and effect (or none)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_impulse_start_3d_editor",
	['sound', 'real', 'real'],
	"void",
	"<sound> <azimuth> <scale> at the sound's minimum distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_looping_start_editor",
	['looping_sound', 'object', 'real'],
	"void",
	"Plays a looping sound from the specified source object (or none));, with the specified scale",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_log_start",
	[],
	"void",
	"Starts the sound channel debugger log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_log_start_named",
	['string'],
	"void",
	"Starts the sound channel debugger log with the specified file name",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_channels_log_stop",
	[],
	"void",
	"Stops the sound channel debugger log",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_profiler_enable",
	[],
	"void",
	"Turns on the simulation/bandwidth profiler and configures it for high level use (similar to the old screen-text-based bandwidth profiler)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_insert_marker",
	['string'],
	"void",
	"Inserts a film marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"saved_film_seek_to_marker",
	['long'],
	"boolean",
	"Seeks to a film marker",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_currency_issue_award_to_team",
	['long', 'long'],
	"void",
	"Awards the latter amount of money to the former team index.  use 0 or 1 for team index.  host only!",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_simulation_set_stream_bandwidth",
	['long'],
	"void",
	"Adjusts the per-stream bandwidth cap and forces all streams to limit themselves to that cap immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_sound_fadeout_time",
	['real'],
	"void",
	"Set fadeout time for sound channel debugger",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_model_marker_name_filter",
	['string'],
	"void",
	"Sets a substring to search for when rendering model markers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"skull_enable",
	['skull', 'boolean'],
	"void",
	"Enable/disable the given skull",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_skull_active",
	['skull'],
	"boolean",
	"Is the given skull currently enabled/disabled?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"allow_object_to_be_lased",
	['object', 'boolean'],
	"void",
	"Enable/disable object laser designation for prototyping purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_object_being_lased",
	['object'],
	"boolean",
	"Check whether an object is being lased by a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_profiler_detail_level",
	['long'],
	"long",
	"Set detail level of simulation profiler capture on the host (affects perf & saved film size).  0-9 are valid, else clamped",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"simulation_profiler_enable_downstream_processing",
	['boolean'],
	"boolean",
	"Enable/disable the processing of downstream data by the simulation profiler database (default is disabled, so if you want to examine downstream, you need to turn this on at display time.  does not affect recording!)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_metagame_get_player_score",
	['player'],
	"long",
	"Calculates the score for an individual player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"collision_debug_lightmaps_print",
	[],
	"void",
	"Prints the collision_debug_lightmaps text to the console",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"load_binary_game_engine",
	['string'],
	"void",
	"Load a compiled megalo engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_files_display_file_names",
	[],
	"void",
	"Displays files network storage is tracking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_storage_files_force_download",
	['string'],
	"void",
	"Forces the download of a network file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_lightmap_inspect",
	[],
	"void",
	"Show the lightmap status",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_debug_colorbars",
	['long'],
	"void",
	"Show the lightmap status",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"custom_app_add_to_players",
	['long'],
	"void",
	"Adds a custom app to all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_player_biped_custom_app",
	['player', 'string'],
	"void",
	"Add custom app (aka armor mod) to biped. like: add_player_biped_custom_app player0 [none | app_grenadier2 | app_resourceful | etc] ; change is effective immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"remove_player_biped_custom_app",
	['player', 'string'],
	"void",
	"Removes custom app (aka armor mod) from biped. like: remove_player_biped_custom_app player0 [none | app_grenadier2 | app_resourceful | etc] ; change is effective immediately",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_menu_rebuild",
	[],
	"void",
	"Reparses the debug menu from the text file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"adjust_team_score",
	['mp_team', 'long'],
	"boolean",
	"Adjusts a team's score up or down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"adjust_player_score",
	['player', 'long'],
	"boolean",
	"Adjusts a player's score up or down",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"enable_roles",
	['boolean'],
	"void",
	"Enable or disable roles",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"show_role_ui",
	['long', 'real'],
	"void",
	"Shows the roles ui",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"voice_force_global_repeater_use",
	['boolean'],
	"void",
	"Forces maximum repeater use, with randomly shuffling repeater assignments every few seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"levels_add_campaign_map_with_id",
	['long', 'string'],
	"void",
	"<map id> <scenario> add scenario to levels array",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"levels_add_campaign_map",
	['string'],
	"void",
	"<scenario> add a single scenario to levels array",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"levels_add_multiplayer_map",
	['string'],
	"void",
	"<scenario> add a single scenario to mp level datum array",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_team_picker_unit_test",
	[],
	"void",
	"Run team picker unit tests",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_team_picker_exhaustive_unit_test",
	[],
	"void",
	"Run exhaustive team picker unit tests",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_objects_unit_seats_filter",
	['string'],
	"void",
	"Set the filter for unit seat debugging.  set to empty string to clear",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_lock_enforcement",
	['boolean'],
	"void",
	"Enable or disable assertions in the synchronization manager lock hierarchy",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_player_custom_app",
	['player', 'long', 'string'],
	"void",
	"Set custom app category (aka armor mod). like: set_player_custom_app player0 <appslotindex_0_1> [none | app_grenadier2 | app_resourceful | etc] ; where 2nd arg is which category (first or second)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_set_screen_name_override_prefix",
	['string'],
	"void",
	"Set prefix for cui screen name overrides",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_load_screen",
	['cui_screen_definition'],
	"void",
	"Loads a cui screen from a definition tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_clear_screens",
	[],
	"void",
	"Clears all cui screens",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_load_themed_screen",
	['cui_screen_definition', 'string_id'],
	"void",
	"Loads a cui screen from a definition tag",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_set_new_objective",
	['string_id'],
	"void",
	"Activates the new objective title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_set_objective_complete",
	['string_id'],
	"void",
	"Activates the objective complete title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_show_cinematic_title",
	['string_id'],
	"void",
	"Activates the chapter title",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_show_radio_transmission_hud",
	['string_id'],
	"void",
	"Enables the radio transmission hud icon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_hud_hide_radio_transmission_hud",
	[],
	"void",
	"Disables the radio transmission hud icon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_toggle_bomb_icon",
	['boolean'],
	"void",
	"Toggle display of ui bomb icon",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"rewards_get_grade",
	['controller'],
	"long",
	"Get player grade for specific controller",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"exit_experience_set_params",
	['string_id', 'string', 'long', 'long', 'long', 'long', 'long'],
	"void",
	"Sets test parameters to show on the exit experience screen. parameters are: game mode (matchmaking, campaign, survival, custom_game, survival_matchmaking), score bitfield (eg. 10111111111), commendation count, count, challenge count, achievements count, cookies before, cookies after, xp before, xp after",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"award_medal",
	['controller', 'string_id', 'long'],
	"void",
	"Award a medal to the specified local controller: <controller> <medal name> <point override value -- 0 to use tag data>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_profile_clear_to_default_values",
	['controller'],
	"void",
	"Slam the specified controller to default profile values",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident",
	['string_id'],
	"void",
	"Fire a global incident for all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_player",
	['string_id', 'player'],
	"void",
	"Fire an incident for a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_team",
	['string_id', 'mp_team'],
	"void",
	"Fire an incident for a team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_player_and_effect_player",
	['string_id', 'player', 'player'],
	"void",
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_player_and_effect_team",
	['string_id', 'player', 'mp_team'],
	"void",
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_team_and_effect_player",
	['string_id', 'mp_team', 'player'],
	"void",
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_team_and_effect_team",
	['string_id', 'mp_team', 'mp_team'],
	"void",
	"Fire an incident",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"submit_incident_with_cause_campaign_team",
	['string_id', 'team'],
	"void",
	"Loops over all players on the campaign team and calls submit_incident_with_cause_player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_set_campaign_insertion_point",
	['short'],
	"boolean",
	"Set the campaign insertion point squad session parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"hs_make_interactive_scripts_deterministic",
	['boolean'],
	"void",
	"Enable or disable the routing of interactive script execution through the simulation system for determinism.  you can also use determinize <normal script call> to determinize a single script call",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_respawn_vehicle",
	['player', 'object_definition'],
	"void",
	"Sets a vehicle definition for a player to spawn in - the player will continue to spawn in this vehicle until you set it to none",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_team_respawn_vehicle",
	['mp_team', 'object_definition'],
	"void",
	"Sets a vehicle definition for a player to spawn in - the player will continue to spawn in this vehicle until you set it to none",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"teleport_players_into_vehicle",
	['unit'],
	"boolean",
	"Tries to teleport all alive players into the specified vehicle, returns true if all players ended up in the vehicle",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"content_test_set_active",
	['long'],
	"void",
	"Enable or disable the test harness for the content system (which will run through a bunch of operations and spew any errors encountered)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"content_test_set_active_test_pass",
	['string', 'long'],
	"void",
	"Enable a specific test pass for the content system (e.g. standard, create)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"command_buffer_cache_playback_enable",
	['boolean'],
	"void",
	"Enable/disable command buffer playback",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_spartan_loadout",
	['player'],
	"void",
	"Set player loadout palette to spartan",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_elite_loadout",
	['player'],
	"void",
	"Set player loadout palette to elite",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_grenade_type",
	['player', 'short'],
	"void",
	"Set player's current grenade type",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_optout_loadout_item",
	['string'],
	"void",
	"Optout another designer loadout item. can be primary weapon, ability, mod, or ordnance. like: 'sniper_rifle', 'aa_reflect', 'app_stealth', 'ord_weap_storm_mortar'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_clear_loadout_optouts",
	[],
	"void",
	"Clear/reset designer item optout list",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph",
	['string'],
	"void",
	"Toggle graphing of some string quantity (ask a coder to graph the stuff and give you the strings)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_reset",
	[],
	"void",
	"Turn off all graphs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_enable_list",
	['boolean'],
	"void",
	"Start tracking available graphs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_filter_list",
	['string'],
	"void",
	"Set a substring filter for available graph tracking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_list",
	[],
	"void",
	"Display the current set of (filtered) available graphs",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"auto_graph_hide",
	[],
	"void",
	"Hide all graphs temporarily (without losing the active set or disabling the graphing behind the scenes).  just to see past them",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"location_names_print",
	[],
	"void",
	"Print all valid location names for the current scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host",
	['string'],
	"void",
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host_squad",
	['string'],
	"void",
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host_posse",
	['string'],
	"void",
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_force_host_group",
	['string'],
	"void",
	"Force a particular box (by machine name) to be host whenever possible",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_enable_block_detection",
	['long'],
	"void",
	"If non-zero, turns on network block detection w/ the provided ms threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_enable_block_detection",
	['long'],
	"void",
	"If non-zero, turns on main loop block detection w/ the provided ms threshold",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"main_synchronous_networking_request_vblank_slip",
	[],
	"void",
	"Force the main loop to slip an extra vblank during its next sleep to try to get to a more stable place relative to the incoming game tick stream",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_button_action_mapping_set",
	['long', 'long'],
	"void",
	"Allows remapping of individual actions in custom button preset, contact a programmer for a list of what each parameter corresponds to",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_appearance_force_model_area",
	['long', 'string_id'],
	"void",
	"Force every player to spawn with a particular selection for a particular area",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_appearance_force_model_area_disable",
	['long'],
	"void",
	"Disable forcing every player to spawn with a particular selection for a particular area",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"debug_instanced_geometry_names_filter",
	['string'],
	"void",
	"Filters instance debugging by name (substring included, set to emptry string to clear)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_animation_on_object",
	['object', 'string_id'],
	"void",
	"Animates the specified object using the specified animation id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"play_animation_on_object_with_graph",
	['object', 'animation_graph', 'string_id'],
	"void",
	"Animates the specified object using the specified animation id",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pause_animation_on_object",
	['object'],
	"void",
	"Pauses the state animation being played on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"resume_animation_on_object",
	['object'],
	"void",
	"Resumes the state animation being played on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_playback_ratio_and_pause_on_object",
	['object', 'real'],
	"void",
	"Sets the animation position [0,1] and pauses the state animation being played on the specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"setup_scene_viewer_animation_debug",
	['object', 'string_id'],
	"void",
	"Sets up the scene viewer with the specified object and animation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_animation_at_time",
	['object', 'string_id', 'real'],
	"void",
	"Adds the specified object and animation to the current scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_move_along_point_set_at_time",
	['object', 'point_set_reference', 'real', 'real'],
	"void",
	"Moves the specified object along the given point set for the scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_spawn_ai_at_time",
	['ai', 'real'],
	"void",
	"Spawns the specified ai at the specified time for the scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"add_scene_viewer_start_performance_at_time",
	['ai', 'real', 'string_id'],
	"void",
	"Starts the specified performance on the specified ai at the specified time for the scene",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_generate_haloscript",
	[],
	"void",
	"Prints out to a file, prototypical code for the scene as it's currently laid out",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_save_scene_to_XML",
	['string'],
	"void",
	"Saves the current scene in xml format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_load_XML_scene_file",
	['string'],
	"void",
	"Loads a scene file in xml format",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"scene_viewer_reset_current_scene",
	[],
	"void",
	"Resets the current scene back to time 0",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"stream_manager_load_core",
	['string'],
	"void",
	"Slam the network stream manager state with a saved core",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"stream_manager_save_cores",
	['long'],
	"void",
	"Begin dumping cores every x seconds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"controller_set_waypoint_flags",
	['controller', 'long', 'boolean'],
	"void",
	"Set a waypoint flag in the profile (outgoing to waypoint)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"waypoint_set_unlock_flag",
	['controller', 'long', 'boolean'],
	"void",
	"Set a waypoint flag in the profile (incoming from waypoint)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"async_test_hang",
	['real', 'long', 'long'],
	"void",
	"Create and async task that hangs for the specified number of seconds with the specified async category and priority",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_campaign",
	[],
	"void",
	"Force all incidents to report as campaign",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_firefight",
	[],
	"void",
	"Force all incidents to report as firefight",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_multiplayer",
	[],
	"void",
	"Force all incidents to report as multiplayer",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_matchmaking",
	[],
	"void",
	"Force all incidents to report as matchmaking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_custom_games",
	[],
	"void",
	"Force all incidents to report as custom games",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_solo",
	[],
	"void",
	"Force all incidents to report as solo",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_coop",
	[],
	"void",
	"Force all incidents to report as coop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"incidents_force_four_player_coop",
	[],
	"void",
	"Force all incidents to report as 4 player coop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_sound_stress_test_message_queue",
	[],
	"void",
	"Generate a bunch of messages to fill up the message queue",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_log_channel_message_queue_state",
	['long', 'boolean'],
	"void",
	"Turn on/off logging of message queue state every time a message is sent for the specified channel index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"global_preferences_set_campaign_state",
	['long'],
	"boolean",
	"Sets the global preferences campaign state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_load_machine_file",
	['string'],
	"void",
	"Load a machine file blf (pulled via gameadmin) directly.  be sure to turn off banhammer lsp syncs to avoid getting your handiwork overwritten",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_set_random_holiday",
	[],
	"void",
	"Set the game to a random holiday (used by stress to verify that setting boxes to random holidays on boot doesn't cause films to go out of sync)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"airstrike_set_launches",
	['player', 'long'],
	"void",
	"Sets the number of available airstrikes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_global_property_watch",
	['string'],
	"void",
	"Add global property watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_property_watch",
	['string'],
	"void",
	"Add property watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_global_property_watch",
	['string'],
	"void",
	"Remove global property watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_property_watch",
	['string'],
	"void",
	"Remove property watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_global_property_watches",
	[],
	"void",
	"Remove all global property watches",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_property_watches",
	[],
	"void",
	"Remove all property watches for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_global_binding_watch",
	['string'],
	"void",
	"Add global binding watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_add_binding_watch",
	['string'],
	"void",
	"Add binding watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_global_binding_watch",
	['string'],
	"void",
	"Remove global binding watch",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_remove_binding_watch",
	['string'],
	"void",
	"Remove binding watch for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_global_binding_watches",
	[],
	"void",
	"Remove all global binding watches",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_binding_watches",
	[],
	"void",
	"Remove all binding watches for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear_global",
	[],
	"void",
	"Clear all global state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_clear",
	[],
	"void",
	"Clear all state for active screen",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"cui_debug_new_user_experience_force_event",
	[],
	"void",
	"Forces the new user armory event component to throw an event like there is a new user",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_record_custom_penalty",
	['player', 'real'],
	"void",
	"Add griefing points to a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_reset",
	[],
	"void",
	"Reset griefing system for xbox",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_force_social_matchmaking",
	[],
	"void",
	"Force the griefing system to believe that it is social matchmaking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_force_ranked_matchmaking",
	[],
	"void",
	"Force the griefing system to believe that it is ranked matchmaking",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_ranked_matchmaking_multiplier",
	['real'],
	"void",
	"Set the ranked matchmaking multiplier",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_social_matchmaking_multiplier",
	['real'],
	"void",
	"Set the ranked matchmaking multiplier",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_custom_game_multiplier",
	['real'],
	"void",
	"Force the griefing system to believe it is a custom game",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_objects_in_sphere_radius",
	['real'],
	"void",
	"Set the maximum distance for nearby enemey players/ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_ai_multiplier",
	['real'],
	"void",
	"Set the multiplier for ai",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_enemy_ai_nearby_multiplier",
	['real'],
	"void",
	"Set the multiplier when an enemy ai is nearby the betrayed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_enemy_player_nearby_multiplier",
	['real'],
	"void",
	"Set the multiplier when an enemy player is nearby the betrayed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_same_squad_multiplier",
	['real'],
	"void",
	"Set the multiplier when both the betrayed and betrayer are in the same matchmaking party",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_shield_damage_base_penalty",
	['real'],
	"void",
	"Set the shield damage base penalty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_body_damage_base_penalty",
	['real'],
	"void",
	"Set the body damage base penalty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_betrayal_base_penalty",
	['real'],
	"void",
	"Set the betrayal base penalty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_betrayal_boot_cutoff",
	['real'],
	"void",
	"Set the betrayal boot cutoff",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_ejection_cutoff",
	['real'],
	"void",
	"Set the ejection cutoff",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_betrayal_decay_seconds",
	['real'],
	"void",
	"Set the seconds it takes to decay a griefing point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"game_grief_set_eject_decay_seconds",
	['real'],
	"void",
	"Set the seconds it takes to decay an ejection point",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"net_disconnect_and_reconnect_all_channels",
	[],
	"void",
	"For reproing omaha bug 26715, allows you to instantly unilaterally reset a machine's network message queues, bringing a danger of misinterpreting incoming fragments",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_profile",
	['starting_profile'],
	"void",
	"Sets the profile for all players to spawn/respawn with",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_profile",
	['starting_profile', 'player'],
	"void",
	"Sets the profile for this player to spawn/respawn with",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_set_challenge_response",
	['string', 'boolean', 'long'],
	"void",
	"Change challenge responses",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_set_challenge_failure_on_timeout",
	['boolean'],
	"void",
	"Enable/disable failures on timeouts",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"network_session_security_set_challenge_force_fail",
	['boolean'],
	"void",
	"Force challenge response failures",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"version",
	['long'],
	"void",
	"Specify the current version of haloscript to use",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"set_assumptions",
	['string'],
	"void",
	"Sets the assumption mask",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motl_dump_bitvector_for_scenario",
	[],
	"void",
	"Dumps the multiplayer object type bitvector for the current loaded scenario",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"motl_verify_mapinfo_for_scenario",
	[],
	"boolean",
	"Checks the current level's mapinfo motl bitvector against what is actually loaded",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"trace_thread_tick_to_file",
	['long', 'long', 'string'],
	"void",
	"Creates a tracedump of the desired thread and tick in a specific file",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyUnit",
	['unit', 'string'],
	"void",
	"Notifies an event linked to a unit that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyObject",
	['object', 'string'],
	"void",
	"Notifies an event linked to an object that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyPlayer",
	['player', 'string'],
	"void",
	"Notifies an event linked to a player that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyLevel",
	['string'],
	"void",
	"Notifies an event linked to the level that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"NotifyGlobal",
	['string'],
	"void",
	"Notifies event linked to anything that it is time to execute",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"UnitEventStatus",
	['unit', 'string'],
	"boolean",
	"Checks whether an event tied to a unit has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ObjectEventStatus",
	['object', 'string'],
	"boolean",
	"Checks whether an event tied to an object has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerEventStatus",
	['player', 'string'],
	"boolean",
	"Checks whether an event tied to a player has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"LevelEventStatus",
	['string'],
	"boolean",
	"Checks whether an event tied to the level has been notified",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_ordnance_points",
	['player', 'long'],
	"void",
	"Sets the ordnance points for a given player (player index, ordnance points)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_ordnance_tier",
	['player', 'long'],
	"void",
	"Sets the ordnance progression tier for a given player (player index, zero-based tier)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_ordnance_points_and_tier",
	['player', 'long', 'long'],
	"void",
	"Sets the ordnance points and tier for a given player (player index, ordnance points, ordnance tier)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ActivateOrdnanceEquipment",
	['player', 'object_definition'],
	"object",
	"Directly equips and activates given equipment. bypassing normal ordnance mechanisms",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop_random",
	['string', 'boolean', 'real'],
	"void",
	"<set_name_string> <randomize_bool> <stagger_seconds>; triggers the ordnance system to drop the set with given name (or random if empty string). 2nd arg: false will not randomize weapons/drop points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop",
	['cutscene_flag', 'string_id'],
	"void",
	"Triggers the random ordnance system to spawn a specific weapon at given location. <flag_object> <weapon_variant_name>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop_random_enable",
	['boolean'],
	"void",
	"Enables/disables random ordnance system",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_drop_random_is_enabled",
	[],
	"boolean",
	"Returns current enable state",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_show_nav_markers",
	['boolean'],
	"void",
	"Show/hide ordnance nav markers",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"ordnance_set_droppod_object",
	['object_definition', 'effect'],
	"void",
	"Set ordnance drop pod scenery object type and the locator effect",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_set_silent_assist_level",
	['player', 'long'],
	"void",
	"Sets the silent-assist level for a given player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_get_silent_assist_level",
	['player'],
	"long",
	"Gets the current silent assist level for the given player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_respawn_dead_players",
	[],
	"void",
	"Respawns all dead players even if no lives are left",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_lives_get",
	[],
	"long",
	"Get the number of lives left in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_lives_set",
	['long'],
	"void",
	"Set the number of lives left in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_infinite_lives_set",
	['boolean'],
	"void",
	"Enable or disable infinite lives mode in firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_goal_get",
	[],
	"short",
	"Get the current set index for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_waves_in_player_goal",
	[],
	"short",
	"Get the number of waves per round for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_wave_get",
	[],
	"short",
	"Get the current wave index for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_wave_squad",
	[],
	"long",
	"Returns the name of the squad template for the current wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_award_hero_medal",
	[],
	"void",
	"Lets the engine award the hero medal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_time_limit",
	[],
	"long",
	"Get the firefight mode time limit from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_goal_count",
	[],
	"long",
	"Get the firefight mode set count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_bonus_lives_awarded",
	[],
	"long",
	"Get the firefight mode bonus lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_shared_team_life_count",
	[],
	"long",
	"Get the firefight mode spartan life count from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_max_lives",
	[],
	"long",
	"Get the firefight mode max lives from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_ammo_crates_enable",
	[],
	"boolean",
	"Get the firefight mode ammo crates enabled property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_current_wave_spawn_method",
	[],
	"delivery_method",
	"Get the firefight mode current wave uses a dropship property from the game variant",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_team_respawns_on_wave",
	[],
	"boolean",
	"Does this team respawn only when waves complete?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_sudden_death",
	['boolean'],
	"void",
	"Start or stop sudden death for firefight mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_player_count_by_team",
	['team'],
	"long",
	"Given a team index, returns the player count of that team",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_increment_player_goal",
	['wave_difficulty'],
	"long",
	"Move on to the next valid player goal, returns the index of the player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_start_goals",
	['wave_difficulty'],
	"void",
	"Sets up the first player goal. with the given difficulty",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_increment_wave",
	[],
	"long",
	"Move on to the next valid wave, returns the index of the wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_current_player_goal_type",
	[],
	"firefight_goal",
	"Get the firefight goal type for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_player_goal_type",
	['long'],
	"firefight_goal",
	"Get the firefight goal type for the specified player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_set_squad_group",
	['ai'],
	"void",
	"Set the squad that the firefight game engine is 'watching'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_get_squad_group",
	[],
	"ai",
	"Gets the squad group that firefight is 'watching'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_objective",
	['short'],
	"short",
	"Returns the table index for the current objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_objective",
	['long', 'short'],
	"short",
	"Returns the table index for the specified objective",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_start_location_folder",
	[],
	"short",
	"Returns the table index for the current start location folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_start_location_folder",
	['long'],
	"short",
	"Returns the table index for the specified start location folder",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_squad_to_place",
	['short'],
	"short",
	"Returns the table index for the current squad to be placed at the specified index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_squad_to_place",
	['long', 'long', 'short'],
	"short",
	"Returns the table index for the specified squad to be placed at the specified index in the specified wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_start_crate",
	['short'],
	"short",
	"Returns the table index for the current crate folder to be placed at the specified index",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_wave_type",
	[],
	"short",
	"Returns the type of the current firefight wave",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_weapon_drop",
	[],
	"string_id",
	"Returns the current weapon to be dropped in the weapon drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_vehicle_drop",
	[],
	"string_id",
	"Returns the current weapon to be dropped in the vehicle drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_weapon_drop",
	['long', 'long'],
	"string_id",
	"Returns the specified wave's weapon to be dropped in the weapon drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_vehicle_drop",
	['long', 'long'],
	"string_id",
	"Returns the specified wave's weapon to be dropped in the vehicle drop",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_user_data",
	[],
	"long",
	"Get the user data for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_user_data",
	['long'],
	"long",
	"Get the user data for a specified goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_objective_name_at",
	['short'],
	"object_name",
	"Gets the objective name at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_objective_name_at",
	['object_name', 'short'],
	"void",
	"Sets the objective name at the specified index to the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_crate_folder_at",
	['short'],
	"folder",
	"Gets the crate folder at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_is_crate_folder_valid",
	['short'],
	"boolean",
	"Checks if the folder is valid at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_crate_folder_at",
	['folder', 'short'],
	"void",
	"Sets the crate folder at the specified index to the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_squad_at",
	['short'],
	"ai",
	"Gets the squad at the specified index from the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_squad_at",
	['ai', 'short'],
	"void",
	"Sets the squad at the specified index to the game engine",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_apply_player_traits",
	['player'],
	"void",
	"Applies the player traits for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_current_goal_time_limit",
	[],
	"short",
	"Gets the time limit (in minutes) for the current player goal",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_set_player_spawn_suppressed",
	['boolean'],
	"void",
	"Sets the flag to suppress player spawn (or not)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"firefight_mode_get_player_spawn_suppressed",
	[],
	"boolean",
	"Gets the flag to see if player spawn is suppressed",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_clear_progression",
	['controller'],
	"void",
	"Resets the current progression for a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_mark_mission_attempted",
	['controller', 'long', 'game_difficulty'],
	"void",
	"Marks a mission in-progress",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_mark_mission_complete",
	['controller', 'long', 'game_difficulty'],
	"void",
	"Marks a mission complete",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"spartanops_set_timeline_length",
	['long'],
	"void",
	"Shortens the timeline for ui debugging purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_gpu_capture",
	[],
	"void",
	"Captures the next gpu frame",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_cpu_task_trace",
	['string'],
	"void",
	"Captures a cpu trace of the named task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_cpu_trace",
	[],
	"void",
	"Captures a cpu trace",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toolbox_cpu_timing",
	[],
	"void",
	"Performs a system timing capture",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CreateDynamicTask",
	['long', 'long', 'object', 'script', 'real'],
	"long",
	"Create a dynamic task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"CreateDynamicTeamTask",
	['long', 'long', 'object', 'script', 'real', 'team'],
	"long",
	"Create a dynamic task with a team parameter",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"DestroyDynamicTask",
	['long'],
	"void",
	"Destroy dynamic task",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetDynamicTaskFilterFlags",
	['ai', 'long'],
	"void",
	"Set task filter flags on an actor",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetDynamicTaskTeamFilter",
	['long', 'long'],
	"void",
	"Set task's allowed teams",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"IsDynamicTaskValid",
	['long'],
	"boolean",
	"Verify dynamic task exists",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetObjectLongVariable",
	['object', 'long', 'long'],
	"void",
	"Store a named variable in an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetObjectRealVariable",
	['object', 'long', 'real'],
	"void",
	"Store a named variable in an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetObjectLongVariable",
	['object', 'long'],
	"long",
	"Recall a named variable from an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetObjectRealVariable",
	['object', 'long'],
	"real",
	"Recall a named variable from an object instance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SendCommandEvent",
	['object', 'long', 'long', 'real'],
	"void",
	"Send generic command event to specified object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"RegisterForObjectEvent",
	['object', 'long'],
	"void",
	"Listen for specified internal event coming from selected object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"UnregisterForObjectEvent",
	['object', 'long'],
	"void",
	"Stop listening for specified internal event coming from selected object",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetObjectEventCallback",
	['object', 'script'],
	"void",
	"Set the function called when selected object throws a registered event",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_next_cinematic",
	['short', 'short', 'short'],
	"void",
	"Record the next cinematic (<frame rate> <width> <height>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_next_cinematic_fml",
	['short', 'short', 'short'],
	"void",
	"Record the next cinematic first, middle, last shot frames (<frame rate> <width> <height>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"record_next_cinematic_distributed",
	['short', 'short', 'short', 'short'],
	"void",
	"Record the next cinematic distributed (<frame rate> <width> <height> <frame mod count>)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real', 'long'],
	"boolean",
	"Start or change ics camera (player, marker_name, user-control cone angle, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real', 'real', 'long'],
	"boolean",
	"Start or change ics camera (player, marker_name, user-control cone angle, auto-centering strength, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real', 'real', 'real', 'real', 'real', 'long'],
	"boolean",
	"Start or change ics camera (player, marker_name, user-control cone angles (minh, maxh, minv, maxv), auto-centering strength, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"PlayerSetICSCamera",
	['player', 'string_id', 'real', 'real', 'real', 'real', 'real', 'real', 'real', 'long'],
	"boolean",
	"Start or change ics camera (player, marker_name, user-control cone angles (minh, maxh, minv, maxv, softh, softv), auto-centering strength, interpolation ticks)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"FirstPersonSetBodyRegionVisibility",
	['player', 'string_id', 'string_id'],
	"boolean",
	"Sets the visibility of a named region on the first-person body model. valid options are 'on', 'off' and 'default'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"killcam_debug",
	['boolean'],
	"void",
	"Enable or disable kill cam debugging",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_point",
	['player', 'point_reference', 'real', 'real', 'long'],
	"void",
	"Force player to move towards a point until it is within a radius, or a timer expires. params are point, max_throttle, max_radius, max_ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_object",
	['player', 'object', 'real', 'real', 'long'],
	"void",
	"Force player to move towards an object until it is within a radius, or a timer expires. params are point, max_throttle, max_radius, max_ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_marker",
	['player', 'object', 'string_id', 'real', 'real', 'long'],
	"void",
	"Force player to move towards an object until it is within a radius, or a timer expires. params are point, max_throttle, max_radius, max_ticks",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_stop_move_to",
	['player'],
	"void",
	"Stop any move_to command that might be active on this player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_control_move_to_active",
	['player'],
	"boolean",
	"Returns true if a move_to command is still active on this player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"io_set_imposter_distance",
	['long', 'long', 'real'],
	"void",
	"Set imposter distance",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_saved_game",
	['string', 'string'],
	"boolean",
	"Test parsing and validation functions for fuzzed single player saved game files for the active user. the header file is copied from <headerpath>, and the saved game file from <filepath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_saved_film",
	['string'],
	"boolean",
	"Test parser and validator for fuzzed saved films and clips from <filmpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_map_variant",
	['string'],
	"boolean",
	"Test parser and validator for fuzzed saved map variants from <mapvariantpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_game_variant",
	['string'],
	"boolean",
	"Test parser and validator for fuzzed saved game variants from <gamevariantpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"test_screenshot",
	['string'],
	"boolean",
	"Test parser and validator for fuzzed screenshot from <screenshotpath>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"list_and_copy_saved_content",
	['string'],
	"void",
	"Lists and copies all the saved content available to <destination>. to skip copying set destination as '-'",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"FilterZoneResourcesWithMapVariant",
	['boolean'],
	"void",
	"Enable or disable map variant resource filtering",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_wireframe",
	[],
	"void",
	"Toggle in and out of wireframe render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_wireframe_use_depth",
	[],
	"void",
	"Toggle depth for ios in wireframe render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_wireframe_show_transparents",
	[],
	"void",
	"Toggle transparents wireframe render mode",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_activate",
	['object'],
	"void",
	"Activate a sentry turret",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_deactivate",
	['object'],
	"void",
	"Deactivate a sentry turret",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_activate_barrel",
	['object', 'long'],
	"void",
	"Activate a sentry turret barrel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sentry_deactivate_barrel",
	['object', 'long'],
	"void",
	"Deactivate a sentry turret barrel",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"IsNarrativeFlagSetOnAnyPlayer",
	['long'],
	"boolean",
	"Is the specified narrative flag set on any player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlagOnLocalPlayers",
	['long', 'boolean'],
	"void",
	"Set the specified narrative flag set on all players",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"GetNarrativeFlag",
	['player', 'long'],
	"boolean",
	"Returns the current state of the narrative flag at the given index for the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlag",
	['player', 'long', 'boolean'],
	"void",
	"Sets the state of the narrative terminal flag at the given index for the specified player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"toggle_bad_collision_to_render_mesh_mappings",
	[],
	"void",
	"Toggle display collision tris with capped render tri mapping",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlagWithFanfareMessageForAllPlayers",
	['long', 'boolean'],
	"void",
	"Sets a waypoint narrative flag for all players and loads a cui fanfare screen for everyone",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_test",
	[],
	"void",
	"Drop spartan objects to test pvp perf",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_test_reset",
	[],
	"void",
	"Reset pvp drop test",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_test_increment_team",
	[],
	"void",
	"Cycle colors to next team for dropped bipeds",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"pvp_drop_elites",
	[],
	"void",
	"Drop elite objects to test pvp perf",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streaming_video_queue",
	['string', 'controller'],
	"boolean",
	"Queue a streaming video",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"streaming_video_stop",
	[],
	"boolean",
	"Exit the current streaming video",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_open_header_signature_failure",
	['string', 'boolean'],
	"void",
	"Force signature failure check performed on cache file header on open <map name> <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_read_header_signature_failure",
	['string', 'boolean'],
	"void",
	"Force signature failure check performed on cache file header before tag data read <map name> <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_read_content_signature_failure",
	['string', 'boolean'],
	"void",
	"Force signature failure check performed on content hashes before tag data read <map name> <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"security_force_cache_file_manifest_hash_failure",
	['boolean'],
	"void",
	"Force failure check performed on map file manifest hashes in network banhammer <shouldfail>",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"io_set_imposter_brightness",
	['long', 'long', 'real'],
	"void",
	"Set imposter brightness",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"campaign_is_completed_on_legendary",
	['player'],
	"boolean",
	"Are all campaign levels completed on legendary difficulty?",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"sound_load_pck",
	['string'],
	"void",
	"Loads a pck for dev purposes",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"is_ace_build",
	[],
	"boolean",
	"Returns whether this is an ace build",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"TestPrintBool",
	['string', 'boolean'],
	"void",
	"Prints the specified boolean with the format '<string> = '<boolean>' to the shell",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"TestPrintReal",
	['string', 'real'],
	"void",
	"Prints the specified real with the format '<string> = '<real>' to the shell",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"render_disable_vsync",
	['boolean'],
	"void",
	"Enable/disable vsync",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"player_action_test_special_action",
	[],
	"boolean",
	"Returns true if any player has hit the special action button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"unit_action_test_special_action",
	['player'],
	"boolean",
	"Returns true if any player has hit the special action button since the last call to (player_action_test_reset)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"SetNarrativeFlagWithFanfareMessageForPlayer",
	['object', 'long', 'boolean'],
	"void",
	"Sets a waypoint narrative flag for the player who pressed the button and loads a cui fanfare screen for him",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"adjust_camera_interpolation",
	[],
	"void",
	"Adjust camera interpolation",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position",
	['real', 'real', 'real', 'string_id', 'string_id', 'boolean'],
	"void",
	"Turns on/off a navpoint tracking a position with the specified art",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position_with_string",
	['real', 'real', 'real', 'string_id', 'string_id', 'string_id'],
	"void",
	"Turns on a navpoint tracking a position with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position_for_player",
	['player', 'real', 'real', 'real', 'string_id', 'string_id', 'boolean'],
	"void",
	"Turns on/off a navpoint tracking a position for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_track_position_for_player_with_string",
	['player', 'real', 'real', 'real', 'string_id', 'string_id', 'string_id'],
	"void",
	"Turns on a navpoint tracking a position with the specified art and string",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_position_set_vertical_offset",
	['string_id', 'real'],
	"void",
	"Set the vertical offset in world units for a tracked position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_position_set_on_radar",
	['string_id', 'boolean', 'boolean'],
	"void",
	"Set the position on the radar for a tracked position: first bool is for enable/disable, second is to show extended range in radar",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_position",
	['string_id'],
	"boolean",
	"Checks if tracking is on for an position",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_is_tracking_position_for_player",
	['player', 'string_id'],
	"boolean",
	"Checks if tracking is on for a position for one player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_set_next_improved",
	['boolean'],
	"void",
	"Tell the navpoint system the next navpoint is an improved navpoint",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_set_improved_for_player",
	['player', 'boolean'],
	"void",
	"Tell the navpoint system the next navpoint is an improved navpoint for a player",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"navpoint_using_improved_navpoints",
	[],
	"boolean",
	"Checks if level was started with improved nav points",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"objects_distance_to_position",
	['object_list', 'real', 'real', 'real'],
	"real",
	"Returns minimum distance from any of the specified objects to the specified position. (returns -1 if there are no objects to check)",
);
hsFunctions.push(newFunc);

var newFunc = new HSFunction(
	"disable_interpolation_for_one_shot",
	[],
	"void",
	"Disable s3d interpolation for one cinematic shot",
);
hsFunctions.push(newFunc);