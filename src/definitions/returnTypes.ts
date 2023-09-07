//void, boolean, real, short, long, string, script, string_id, unit_seat_mapping, trigger_volume, sound_event, cutscene_flag, cutscene_camera_point, cutscene_title, cutscene_recording, device_group, ai, ai_command_list, ai_command_script, ai_behavior, ai_orders, ai_line, starting_profile, conversation, player, zone_set, designer_zone, point_reference, point_set_reference, style, object_list, folder, sound, effect, damage, looping_sound, animation_graph, damage_effect, object_definition, bitmap, shader, render_model, structure_definition, lightmap_definition, cinematic_definition, cinematic_scene_definition, cinematic_scene_data_definition, cinematic_transition_definition, bink_definition, cui_screen_definition, any_tag, any_tag_not_resolving, game_difficulty, team, mp_team, controller, button_preset, joystick_preset, player_color, player_model_choice, voice_output_setting, voice_mask, subtitle_setting, actor_type, model_state, event, character_physics, skull, firing_point_evaluator, damage_region, currency_type, delivery_method, wave_difficulty, firefight_goal, firefight_wave_type, font, text_justification, text_alignment, text_drop_shadow_type, havok_group

class HSReturnType {
	constructor(
		public name: string,
		public desc: string
	) {}
}

export var hsReturnTypes = new Array<HSReturnType>();

var newType = new HSReturnType(
	"void",
	"Null value. Does not return anything",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"boolean",
	"Can only be true or false (false can be written as 0 or off, true can be written as 1 or on",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"real",
	"Any floating point number. Can be positive or negative",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"short",
	"Integer in range -32,768 to 32,767",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"long",
	"Integer in range -2,147,483,648 to 2,147,483,647",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"string",
	"A string. Must be surrounded in double quotes if it contains whitespace",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"script",
	"A compiled script",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"string_id",
	"Reference to a tag defined string. Used to point to tag fields",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"unit_seat_mapping",
	"Reference to a vehicles seats. Matches all seats which start with or equal the given string",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"trigger_volume",
	"A trigger_volume defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"sound_event",
	"A Wwise sound_event",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cutscene_flag",
	"A cutscene_flag defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cutscene_camera_point",
	"A cutscene_camera_point defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cutscene_title",
	"A cutscene_title defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"device_group",
	"A device_group defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"ai",
	"One of: ai_actor / squad_group / squad / ai_starting_location",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"ai_command_script",
	"A compiled ai_command_script",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"ai_behavior",
	"Type of ai_behavior",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"ai_line",
	"An ai_line specified in the scenario's ai_mission_dialogue tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"starting_profile",
	"A starting_profile defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"player",
	"Enum representing a player. 0 - 3",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"zone_set",
	"A zone_set defined in the scenario tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"designer_zone",
	"A designer_zone defined in the scenario tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"designer_zone",
	"An ai point_reference defined in the scenario tag. Ai point references are given in the format: point_set_reference.point_reference",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"point_set_reference",
	"An ai point_set_reference defined in the scenario tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"style",
	"Reference to an ai style",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"object_list",
	"A list of objects",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"folder",
	"An object folder defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"sound",
	"A sound tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"effect",
	"An effect tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"damage",
	"A damage tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"damage",
	"A looping_sound tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"animation_graph",
	"An model_animation_graph tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"damage_effect",
	"An damage_effect tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"object_definition",
	"A tag path. Captures all objects loaded in a scenario that represent this tag path",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"bitmap",
	"A bitmap tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"render_model",
	"A render_model tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"structure_definition",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"lightmap_definition",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cinematic_definition",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cinematic_scene_definition",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cinematic_scene_data_definition",
	"",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cinematic_transition_definition",
	"",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"bink_definition",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cui_screen_definition",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"any_tag",
	"A tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"any_tag_not_resolving",
	"A tag",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"game_difficulty",
	"Enum representing a game_difficulty. 0 - 3",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"game_difficulty",
	"Enum representing a team. 0 - 8",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"mp_team",
	"Enum representing an mp_team. 0 - 7",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"controller",
	"Enum representing a controller. 0 - 3",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"button_preset",
	"Enum representing a button_preset. 0 - 8",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"joystick_preset",
	"Enum representing a joystick_preset. 0 - 3",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"player_color",
	"Enum representing a player_color. 0 - 31",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"player_model_choice",
	"Enum representing a player_model_choice. 0 - 1",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"voice_output_setting",
	"Enum representing a voice_output_setting. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"voice_mask",
	"Enum representing a voice_mask. 0 - 1",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"subtitle_setting",
	"Enum representing a subtitle_setting. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"actor_type",
	"Enum representing an actor_type. 0 - 21",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"model_state",
	"Enum representing a model_state. 0 - 4",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"event",
	"Enum representing an event. 0 - 5",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"character_physics",
	"Enum representing character_physics. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"character_physics",
	"Enum representing a skull. 0 - 16",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"firing_point_evaluator",
	"Enum representing a firing_point_evaluator. 0 - 68",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"damage_region",
	"Enum representing a damage_region. 0 - 10",
);
hsReturnTypes.push(newType);


var newType = new HSReturnType(
	"damage_region",
	"Enum representing a damage_region. 0 - 10",
);
hsReturnTypes.push(newType);


var newType = new HSReturnType(
	"currency_type",
	"Enum representing a currency_type. 0 - 1",
);
hsReturnTypes.push(newType);


var newType = new HSReturnType(
	"delivery_method",
	"Enum representing a delivery_method. 0 - 3",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"wave_difficulty",
	"Enum representing a wave_difficulty. 0 - 2",
);
hsReturnTypes.push(newType);


var newType = new HSReturnType(
	"firefight_goal",
	"Enum representing a firefight_goal. 0 - 8",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"firefight_wave_type",
	"Enum representing a firefight_wave_type. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"firefight_wave_type",
	"Enum representing a firefight_wave_type. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"font",
	"Enum representing a font. 0 - 30",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"text_justification",
	"Enum representing a text_justification. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"text_alignment",
	"Enum representing a text_alignment. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"text_drop_shadow_type",
	"Enum representing a text_drop_shadow_type. 0 - 2",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"havok_group",
	"Enum representing a havok_group. 0 - 30",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"object",
	"A runtime object",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"unit",
	"A runtime unit",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"vehicle",
	"A runtime vehicle",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"weapon",
	"A runtime weapon",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"device",
	"A runtime device",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"scenery",
	"A runtime scenery object",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"effect_scenery",
	"A runtime effect_scenery object",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"object_name",
	"An object_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"unit_name",
	"A unit_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"vehicle_name",
	"A vehicle_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"vehicle_name",
	"A weapon_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"device_name",
	"A device_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"scenery_name",
	"A scenery_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"effect_scenery_name",
	"A effect_scenery_name defined in the scenario",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"cinematic_lightprobe",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"animation_budget_reference",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"looping_sound_budget_reference",
	"?",
);
hsReturnTypes.push(newType);

var newType = new HSReturnType(
	"sound_budget_reference",
	"?",
);
hsReturnTypes.push(newType);