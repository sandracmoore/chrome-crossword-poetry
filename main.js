// clues and answers taken from https://nytcrosswordanswers.com/198342/new-york-times-crossword-april-29-2019-answers/

// https://www.w3schools.com/js/js_date_methods.asp


$(document).ready(function() {

	var crossword = {
		"origin": [
			"<br><br><br>#clue.capitalize##punctuation# #answer##punctuation# #clue# #clue##punctuation# #answer# <br>#answer# #clue##punctuation# #clue# #answer##punctuation# #answer# #clue##punctuation# #answer##punctuation# #clue##punctuation# #answer# #punctuation# <br>#answer##punctuation# #clue# #clue##punctuation# #answer# <br>#answer# #clue##punctuation# #clue# #answer##punctuation# #answer# #clue##punctuation# #answer##punctuation# #clue##punctuation# #answer#",
		],
		"clue":[
		"'I'll return shortly,' in a text",
		"naughty naughty",
		"pioneered",
		"where pumpkins grow",
		"greek earth goddess",
		"adamantly against",
		"general vibe",
		"where mascara goes",
		"shooting star",
		"scrape (by)",
		"Tehran's land",
		"discourages",
		"thieves often go by them",
		"wife of Jared Kushner",
		"steadfast",
		"modern-day flood",
		"leaves 'em rollin in the aisle",
		"autumn invader",
		"crowdsourced compendia",
		"bearlike marsupial",
		"Valentine card hugs",
		"sparkling rock",
		"about on memos",
		"mythical elephant carrier",
		"how some things are set",
		"white-plumed wader",
		"happening right now",
		"they're often smashed",
		"emperor adopted by Claudius",
		"heart test letters",
		"autumn frost in July",
		"lummox",
		"frostbite site",
		"flirts with in a way",
		"wedding reception cry",
		"sci-fi sage",
		"ending with orange or lemon",
		"pale-colored beer",
		"clenched as teeth",
		"separate as stitches",
		"walk dizzily",
		"old russian ruler",
		"lipstick mishap",
		"concern for a samurai",
		"venomously biting",
		"school cafeteria food pejoratively",
		"ones picked out of lineups",
		"that of this clue is awkward",
		"fundamentals",
		"kindling",
		"fifth-brightest star in the night sky",
		"manifestation of sulkiness",
		"part of a pod",
		"trio in a children's rhyme",
		"dangerous cocktail",
		"like a mythical lion",
		"one who's frequently in the dark",
		"epitome of romantic passion",
		"it gets depressed on the road",
		"#answer#"
		],
		

		"answer":[
		"BRB",
		"tsk tsk",
		"led",
		"patch",
		"gaea",
		"get cracking",
		"aura",
		"lash",
		"anti",
		"airace",
		"eke",
		"Iran",
		"deters",
		"aliases",
		"Ivanka",
		"staunch",
		"email",
		"slays",
		"leaf peeper",
		"wikis",
		"koala",
		"xoxo",
		"geode",
		"in re",
		"roc",
		"in stone",
		"egret",
		"live",
		"sots",
		"nero",
		"ekg",
		"slain",
		"oaf",
		"nose",
		"smiles at",
		"a toast",
		"Yoda",
		"ade",
		"blonde ale",
		"gritted",
		"unknit",
		"reel",
		"tsar",
		"smear",
		"honor",
		"aspish",
		"slop",
		"perps",
		"phrasing",
		"abcs",
		"sticks",
		"vega",
		"moue",
		"orca",
		"mice",
		"speedball",
		"nemean",
		"caver",
		"latin lover",
		"brake",
		"#clue#"
		],


		"punctuation":[
		" ",
		",",
		".",
		"<br>",
		"<br>",
		"<br>",
		"<br>",
		"!",
		"<br>"
		]
	};

	var grammar = tracery.createGrammar(crossword);
	var text = grammar.flatten('#origin#');
	$('#content').html(text);

  // function loadJsonFromFile() {
		// // You can load directly from local files in firefox but not in Chrome
		// // To load from local files in chrome, check https://www.maketecheasier.com/setup-local-web-server-all-platforms/
		// $.getJSON("https://raw.githubusercontent.com/cqx931/Coding4Language/master/tutorials/week2/01_tracery_js/grammar_tracery.json", function(json) {
	 //     console.log(json)
	 //  });
  // };

	loadJsonFromFile();

});
