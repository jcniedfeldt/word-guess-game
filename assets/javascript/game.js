var playerWins = 0;
var playerLosses = 0;
// var wordBank = ['Accio', 'Acid pops', 'Aconite', 'Acromantula ', 'Alchemy', 'Alohomora', 'Animagus ', 'Anti-venom ', 'Aparecium', 'Apparate', 'Arithmancy', 'Astronomy', 'Auror', 'Azkaban', 'Basilisk', 'Bat-Bogey Hex', 'Beater', 'Beauxbatons Academy of Magic', 'Bertie Botts Every Flavour Beans', 'Bezoar', 'Black Forest', 'Blast-Ended Skrewt', 'Blood Blisterpod', 'Blood-flavoured lollipops', 'Bludgers', 'Body-Bind curse', 'Boggart', 'Borgin and Burkes', 'Bouncing Bulb', 'Bowtruckle', 'Broomstick Servicing Kit', 'Bubble-Head Charm', 'Bubotuber', 'Bulbadox powder', 'Burrow, The', 'Butterbeer', 'Canary Creams', 'Care of Magical Creatures', 'Centaurs', 'Chamber of Secrets, the', 'Charm', 'Chaser', 'Chimaera', 'Chocoballs', 'Chocolate Frogs', 'Chudley Cannons, the', 'Cleansweep Eleven', 'Cleansweep Seven', 'Cockroach Clusters', 'Colloportus', 'Come and Go Room', 'Comet', 'Common room', 'Common Welsh Green', 'Cornish pixies', 'Cribbages Wizarding Crackers', 'Cruciatus Curse', 'Crumple-Horned Snorkacks', 'Crup', 'Daily Prophet, the', 'Dark detectors', 'Dark Mark, the', 'Death Eaters ', 'Deathday Party', 'Decree', 'Defence Against the Dark Arts ', 'Deflating Draught ', 'Dementor ', 'Dementors Kiss ', 'Densaugeo', 'Dervish and Banges', 'Devils Snare', 'Diagon Alley', 'Diffindo', 'Disapparate', 'Disillusionment Charm', 'Dissendium', 'Divination', 'Doxy', 'Dr Filibusters Fabulous Wet-Start, No-Heat Fireworks', 'Dr Ubblys Oblivious Unction', 'Draco Dormiens Nunquam Titillandus', 'Dragon', 'Draught of Living Death, the', 'Draught of Peace', 'Droobles Best Blowing Gum', 'Duelling Club', 'Dumbledores Army', 'Dungbomb', 'Durmstrang Institute', 'Eeylops Owl Emporium', 'Elixir of Life, the', 'Engorgio', 'Evanesco', 'Expecto patronum', 'Expelliarmus', 'Exploding bonbons', 'Exploding Snap', 'Extendable Ears', 'Fainting Fancy', 'Ferula', 'Fidelius Charm', 'Finite Incantatem', 'Firebolt', 'Fizzing Whizzbee', 'Fizzing Whizzbees', 'Flagrate', 'Flobberworm', 'Floo Network', 'Floo powder', 'Florean Fortesques Ice-Cream Parlour', 'Flourish and Blotts', 'Flutterby Bush', 'Foe-Glass', 'Forbidden Forest, the', 'Ford Anglia', 'Fountain of Magical Brethren', 'Four-Point Spell', 'Fudge Flies', 'Furnunculus', 'Galleon', 'Gambol and Japes Wizarding Joke Shop', 'Garrotting Gas', 'Ghoul ', 'Giant ', 'Gillyweed ', 'Gnomes ', 'Goblet of Fire ', 'Goblins', 'Gobstones', 'Godrics Hollow', 'Golden Snitch', 'Great Hall, the', 'Grim', 'Grimmauld Place ', 'Grindylow', 'Gringotts', 'Grunnings', 'Gryffindor house ', 'Gubraithian fire', 'Gurg', 'Half-breed', 'Hand of Glory', 'Headless Hat', 'Headless Hunt, the', 'Healer', 'Hebridean Black', 'Heir of Slytherin', 'Heliopath', 'Hellebore', 'Heptomology', 'Herbology', 'Hinkypunk', 'Hippogriff', 'Hit Wizards', 'Hogs Head, the', 'Hogsmeade', 'Hogwarts School of Witchcraft and Wizardry', 'Honeydukes', 'House Cup, the', 'House-elf', 'Howler', 'Hufflepuff house', 'Ice Mice', 'Impediment Jinx', 'Imperius Curse', 'Imperturbable Charm', 'Impervius', 'Incarcerous', 'Incendio', 'Inquisitorial Squad', 'Inter-departmental memos', 'Invisibility Cloak', 'Jelly Slugs', 'Jelly-Legs Jinx', 'Kappa', 'Karkus', 'Keeper', 'Killing Curse, The', 'Kings Cross Station', 'Knarl', 'Kneazle', 'Knight Bus, the', 'Knockturn Alley', 'Knut', 'Kwikspell', 'Leaky Cauldron, the', 'Legilimency', 'Legilimens', 'Legilimens', 'Leprechaun', 'Locomotor', 'Lumos ', 'Madam Malkins Robes for All Occassions', 'Magical eye', 'Magical Law Enforcement Squad', 'Magical Menagerie', 'Magorian', 'Mandragora', 'Mandrake', 'Marauders Map', 'Merpeople', 'Metamorphmagus ', 'Mimbulus mimbletonia', 'Ministry of Magic', 'Mirror of Erised', 'Mobiliarbus', 'Mobilicorpus', 'Monkshood', 'Monster Book of Monsters, The', 'Morsmordre', 'Mudblood', 'Muggle', 'Muggle duelling', 'Muggle Studies', 'Murtlap', 'Murtlap essence', 'Nargles', 'N.E.W.T.s', 'Niffler', 'Nimbus Two Thousand', 'Nimbus Two Thousand and One', 'Norwegian Ridgeback', 'Nosebleed Nougat', 'Nox', 'Obliviate', 'Obliviator', 'Occlumency', 'Ollivanders', 'Omnioculars', 'Order of the Phoenix', 'Ornithomancy', 'O.W.L.s', 'Parselmouth', 'Parseltongue', 'Patronus', 'Pensieve', 'Pepper Imps', 'Pepperup Potion', 'Peppermint Toads', 'Petrificus Totalus', 'Philosophers Stone', 'Phoenix', 'Platform nine and three-quarters', 'Pocket Sneakoscope ', 'Poltergeist', 'Polyjuice Potion', 'Porlock', 'Portkey', 'Portus', 'Potions', 'Prior Incantato', 'Privet Drive', 'Protego', 'Puking Pastilles', 'Pumpkin juice', 'Pumpkin pasty', 'Purge & Dowse Ltd.', 'Put-Outer', 'Quaffle', 'Quality Quidditch Supplies', 'Quibbler, The', 'Quick-Quotes Quill', 'Quidditch', 'Quietus', 'Ravenclaw house', 'Red Cap', 'Reducio', 'Reductor Curse', 'Relashio', 'Remembrall', 'Rennervate', 'Reparo', 'Rictusempra', 'Riddikulus', 'Riddle House', 'Room of Requirement', 'Salamander', 'Scourgify', 'Scrivenshafts Quill Shop', 'Secrecy Sensor', 'Secret Keeper', 'Seeing Eye', 'Seeker', 'Seer', 'Self-shuffling playing cards', 'Shield Charm', 'Shrieking Shack', 'Sickle', 'Silencio', 'Skele-Gro', 'Skiving Snackboxes', 'Sleekeazys Hair Potion', 'Sloth Grip Roll', 'Slytherin house', 'Smeltings', 'Sneakoscope', 'Sonorus', 'Sorting Hat', 'Spellotape', 'S.P.E.W.', 'Splinching', 'Squib', 'Stealth Sensoring Spell', 'Stupefy', 'Sunday Prophet, the', 'Swelling Solution', 'Tarantallegra', 'Thestral', 'Three Broomsticks, the', 'Time-Turner', 'Ton-Tongue Toffee', 'Toothflossing Stringmints', 'Toujours pur', 'Transfiguration', 'Transfiguration Today', 'Triwizard Tournament', 'Two-way mirrors', 'Umbridge-itis', 'Unforgivable Curses', 'Unicorn', 'Unspeakable', 'Vampire', 'Veil, the', 'Venomous Tentacula seeds',
//     'Veritaserum', 'Wand', 'Wand-tree', 'Wartcap powder', 'Watchwizard', 'Weasleys Wildfire Whiz-bangs', 'Weasleys Wizarding Wheezes', 'Weird Sisters, the', 'Welcomewitch', 'Werewolf', 'Which Broomstick', 'Whomping Willow', 'Wingardium Leviosa', 'Wizarding Examinations Authority', 'Wizengamot', 'Wizengamot Administration Services', 'Wolfsbane', 'WWN', 'Zonkos']
var wordBank = ['Accio', 'Acid pops', 'Aconite', 'Acromantula ', 'Alchemy', 'Alohomora', 'Animagus ', 'Anti-venom ', 'Aparecium', 'Apparate', 'Arithmancy', 'Astronomy', 'Auror', 'Azkaban', 'Basilisk', 'Bat-Bogey Hex', 'Beater', 'Beauxbatons Academy of Magic', 'Bertie Botts Every Flavour Beans', 'Bezoar', 'Black Forest', 'Blast-Ended Skrewt', 'Blood Blisterpod', 'Blood-flavoured lollipops', 'Bludgers', 'Body-Bind curse', 'Boggart', 'Borgin and Burkes', 'Bouncing Bulb', 'Bowtruckle', 'Broomstick Servicing Kit', 'Bubble-Head Charm', 'Bubotuber', 'Bulbadox powder', 'Burrow', 'Butterbeer', 'Canary Creams', 'Care of Magical Creatures', 'Centaurs', 'Chamber of Secrets', 'Charm', 'Chaser', 'Chimaera', 'Chocoballs', 'Chocolate Frogs', 'Chudley Cannons', 'Cleansweep Eleven', 'Cleansweep Seven', 'Cockroach Clusters', 'Colloportus', 'Come and Go Room', 'Comet', 'Common room', 'Common Welsh Green', 'Cornish pixies', 'Cribbages Wizarding Crackers', 'Cruciatus Curse', 'Crumple-Horned Snorkacks', 'Crup', 'Daily Prophet', 'Dark detectors', 'Dark Mark', 'Death Eaters ', 'Deathday Party', 'Decree', 'Defence Against the Dark Arts ', 'Deflating Draught ', 'Dementor ', 'Dementors Kiss ', 'Densaugeo', 'Dervish and Banges', 'Devils Snare', 'Diagon Alley', 'Diffindo', 'Disapparate', 'Disillusionment Charm', 'Dissendium', 'Divination', 'Doxy', 'Dr Filibusters Fabulous Wet-Start', 'Dr Ubblys Oblivious Unction', 'Draco Dormiens Nunquam Titillandus', 'Dragon', 'Draught of Living Death', 'Draught of Peace',
    'Droobles Best Blowing Gum', 'Duelling Club', 'Dumbledores Army', 'Dungbomb', 'Durmstrang Institute', 'Eeylops Owl Emporium', 'Elixir of Life', 'Engorgio', 'Evanesco', 'Expecto patronum', 'Expelliarmus', 'Exploding bonbons', 'Exploding Snap', 'Extendable Ears', 'Fainting Fancy', 'Ferula', 'Fidelius Charm', 'Finite Incantatem', 'Firebolt', 'Fizzing Whizzbee', 'Fizzing Whizzbees', 'Flagrate', 'Flobberworm', 'Floo Network', 'Floo powder', 'Florean Fortesques Ice-Cream Parlour', 'Flourish and Blotts', 'Flutterby Bush', 'Foe-Glass', 'Forbidden Forest', 'Ford Anglia', 'Fountain of Magical Brethren', 'Four-Point Spell', 'Fudge Flies', 'Furnunculus', 'Galleon', 'Gambol and Japes Wizarding Joke Shop', 'Garrotting Gas', 'Ghoul ', 'Giant ', 'Gillyweed ', 'Gnomes ', 'Goblet of Fire ', 'Goblins', 'Gobstones', 'Godrics Hollow', 'Golden Snitch', 'Great Hall', 'Grim', 'Grimmauld Place ', 'Grindylow', 'Gringotts', 'Grunnings', 'Gryffindor house ', 'Gubraithian fire', 'Gurg', 'Half-breed', 'Hand of Glory', 'Headless Hat', 'Headless Hunt', 'Healer', 'Hebridean Black', 'Heir of Slytherin', 'Heliopath', 'Hellebore', 'Heptomology', 'Herbology', 'Hinkypunk', 'Hippogriff', 'Hit Wizards', 'Hogs Head', 'Hogsmeade', 'Hogwarts School of Witchcraft and Wizardry', 'Honeydukes', 'House Cup', 'House-elf', 'Howler', 'Hufflepuff house', 'Ice Mice', 'Impediment Jinx', 'Imperius Curse', 'Imperturbable Charm', 'Impervius', 'Incarcerous', 'Incendio', 'Inquisitorial Squad', 'Inter-departmental memos', 'Invisibility Cloak', 'Jelly Slugs', 'Jelly-Legs Jinx', 'Kappa', 'Karkus', 'Keeper', 'Killing Curse', 'Kings Cross Station', 'Knarl', 'Kneazle', 'Knight Bus', 'Knockturn Alley', 'Knut', 'Kwikspell', 'Leaky Cauldron', 'Legilimency', 'Legilimens', 'Legilimens', 'Leprechaun', 'Locomotor', 'Lumos ', 'Madam Malkins Robes for All Occassions', 'Magical eye', 'Magical Law Enforcement Squad', 'Magical Menagerie', 'Magorian', 'Mandragora', 'Mandrake', 'Marauders Map', 'Merpeople', 'Metamorphmagus ', 'Mimbulus mimbletonia', 'Ministry of Magic', 'Mirror of Erised', 'Mobiliarbus', 'Mobilicorpus', 'Monkshood', 'Monster Book of Monsters', 'Morsmordre', 'Mudblood', 'Muggle', 'Muggle duelling', 'Muggle Studies', 'Murtlap', 'Murtlap essence', 'Nargles', 'N.E.W.T.s', 'Niffler', 'Nimbus Two Thousand', 'Nimbus Two Thousand and One', 'Norwegian Ridgeback', 'Nosebleed Nougat', 'Nox', 'Obliviate', 'Obliviator', 'Occlumency', 'Ollivanders', 'Omnioculars', 'Order of the Phoenix', 'Ornithomancy', 'O.W.L.s', 'Parselmouth', 'Parseltongue', 'Patronus', 'Pensieve', 'Pepper Imps', 'Pepperup Potion', 'Peppermint Toads', 'Petrificus Totalus', 'Philosophers Stone', 'Phoenix', 'Platform nine and three-quarters', 'Pocket Sneakoscope ', 'Poltergeist', 'Polyjuice Potion', 'Porlock', 'Portkey', 'Portus', 'Potions', 'Prior Incantato', 'Privet Drive', 'Protego', 'Puking Pastilles', 'Pumpkin juice', 'Pumpkin pasty', 'Purge & Dowse Ltd.', 'Put-Outer', 'Quaffle', 'Quality Quidditch Supplies', 'Quibbler', 'Quick-Quotes Quill', 'Quidditch', 'Quietus', 'Ravenclaw house', 'Red Cap', 'Reducio', 'Reductor Curse', 'Relashio', 'Remembrall', 'Rennervate', 'Reparo', 'Rictusempra', 'Riddikulus', 'Riddle House', 'Room of Requirement', 'Salamander', 'Scourgify', 'Scrivenshafts Quill Shop', 'Secrecy Sensor', 'Secret Keeper', 'Seeing Eye', 'Seeker', 'Seer', 'Self-shuffling playing cards', 'Shield Charm', 'Shrieking Shack', 'Sickle', 'Silencio', 'Skele-Gro', 'Skiving Snackboxes', 'Sleekeazys Hair Potion', 'Sloth Grip Roll', 'Slytherin house', 'Smeltings', 'Sneakoscope', 'Sonorus', 'Sorting Hat', 'Spellotape', 'S.P.E.W.', 'Splinching', 'Squib', 'Stealth Sensoring Spell', 'Stupefy', 'Sunday Prophet', 'Swelling Solution', 'Tarantallegra', 'Thestral', 'Three Broomsticks', 'Time-Turner', 'Ton-Tongue Toffee', 'Toothflossing Stringmints', 'Toujours pur', 'Transfiguration', 'Transfiguration Today', 'Triwizard Tournament', 'Two-way mirrors', 'Umbridge-itis', 'Unforgivable Curses', 'Unicorn', 'Unspeakable', 'Vampire', 'Veil', 'Venomous Tentacula seeds', 'Veritaserum', 'Wand', 'Wand-tree', 'Wartcap powder', 'Watchwizard', 'Weasleys Wildfire Whiz-bangs', 'Weasleys Wizarding Wheezes', 'Weird Sisters', 'Welcomewitch', 'Werewolf', 'Which Broomstick', 'Whomping Willow', 'Wingardium Leviosa', 'Wizarding Examinations Authority', 'Wizengamot', 'Wizengamot Administration Services', 'Wolfsbane', 'WWN', 'Zonkos'];

var givenChars = ['.', ',', ' ',';','&'];

class Hangman_HP {
    constructor() {
        this.wordBank = wordBank;

        this.numguesses = 7;
        var randInt = Math.floor(Math.random() * this.wordBank.length);
        this.word = this.wordBank[randInt];//TODO change this to randomly select word from bank
        this.guessedLetters = [];
    }
    guessLetter(letter) {
        //has it been guessed already?
        //TODO don't know if tolowercase is necessary
        if (!this.guessedLetters.includes(letter)) {
            console.log("New Letter: " + letter);
            this.guessedLetters.push(letter.toLowerCase())
            if (!this.word.includes(letter)) {
                this.numguesses--;
            }
        }
        else {
            console.log("You already guessed " + letter);
        }
        var str2ret = this.getWordString();
        console.log(str2ret)
        //if not, update guessed letters and do something
        //if in word, 
        return str2ret;
    }
    getWordString() {
        // var array2ret;
        var str2ret = "";
        var templetter = "";
        var wordcomplete = true;
        for (var i = 0; i < this.word.length; i++) {
            templetter = this.word.charAt(i);
            if (",.&- ".includes(templetter)) {
                str2ret += templetter + " ";
                continue;
            }
            if (this.guessedLetters.includes(templetter.toLowerCase())) {
                str2ret += templetter;
            }
            else {
                str2ret += " _ ";
                wordcomplete = false;
            }
        }
        if (wordcomplete) {
            this.guessedWord = true;
        }
        console.log("getWordString returns:" + str2ret);
        return str2ret;
    }
    getGuessedLetters() {
        return this.guessedLetters.join(" ").toUpperCase();
    }


}

// Initialize class
// on key event that calls the Hangman_HP class guessLetter method

var wordDiv = document.getElementById("word");
var playWinEl = document.getElementById("playerWins");
var playLossEl = document.getElementById("playerLosses");
var guesses = document.getElementById("guesses");
var guessedLetters = document.getElementById("guessedLetters");

var hmInstance = new Hangman_HP();
wordDiv.textContent = hmInstance.getWordString();
guesses.textContent = hmInstance.numguesses;
var letter;

// function setText(id,text){
//     var el = document.getElementById(id);
//     el.setText = text;
// }

document.onkeydown = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    letter = event.key.toLowerCase();
    //check if letter is a-z

    var gameFinished = false;
    wordDiv.textContent = hmInstance.guessLetter(letter);
    guesses.textContent = hmInstance.numguesses;
    guessedLetters.textContent = hmInstance.getGuessedLetters();
    if (hmInstance.guessedWord) {
        //Player won
        playerWins++;
        playWinEl.textContent = playerWins;
        gameFinished = true;
    } else if (hmInstance.numguesses < 1) {
        //Player lost
        playerLosses++;
        playLossEl.textContent = playerLosses;
        gameFinished = true;
    }
    if (gameFinished) {
        corrWord = document.getElementById("correctWord");
        corrWord.textContent = hmInstance.word;
        // setText("correctWord",hmInstance.word);
        message = document.getElementById("message");
        if (hmInstance.guessedWord) {
            message.textContent = "You got it!";
        } else {
            message.textContent = "Better luck next time.";
        }
        hmInstance = new Hangman_HP();
        wordDiv.textContent = hmInstance.getWordString();
        guesses.textContent = hmInstance.numguesses;
        guessedLetters.textContent = hmInstance.getGuessedLetters();
    }
}