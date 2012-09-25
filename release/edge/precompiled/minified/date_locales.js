Date.addLocale("de",{plural:k,capitalizeUnit:k,months:"Januar,Februar,M\u00e4rz|Marz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",weekdays:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",units:"Millisekunde:|n,Sekunde:|n,Minute:|n,Stunde:|n,Tag:|en,Woche:|n,Monat:|en,Jahr:|en",numbers:"ein:|e|er|en|em,zwei,drei,vier,fuenf,sechs,sieben,acht,neun,zehn",optionals:"der","short":"{d}. {Month} {yyyy}","long":"{d}. {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d}. {Month} {yyyy} {H}:{mm}:{ss}",
past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"um",ampm:"am,pm",modifiers:[{name:"day",src:"vorgestern",value:-2},{name:"day",src:"gestern",value:-1},{name:"day",src:"heute",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"\u00fcbermorgen|ubermorgen|uebermorgen",value:2},{name:"sign",src:"vor:|her",value:-1},{name:"sign",src:"in",value:1},{name:"shift",src:"letzte:|r|n|s",value:-1},{name:"shift",src:"n\u00e4chste:|r|n|s+nachste:|r|n|s+naechste:|r|n|s+kommende:n|r",
value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]});
Date.addLocale("es",{plural:k,months:"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre",weekdays:"domingo,lunes,martes,mi\u00e9rcoles|miercoles,jueves,viernes,s\u00e1bado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,d\u00eda|d\u00edas|dia|dias,semana:|s,mes:|es,a\u00f1o|a\u00f1os|ano|anos",numbers:"uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez",optionals:"el,de","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",
past:"{sign} {num} {unit}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"a las",ampm:"am,pm",modifiers:[{name:"day",src:"anteayer",value:-2},{name:"day",src:"ayer",value:-1},{name:"day",src:"hoy",value:0},{name:"day",src:"ma\u00f1ana|manana",value:1},{name:"sign",src:"hace",value:-1},{name:"sign",src:"de ahora",value:1},{name:"shift",src:"pasad:o|a",value:-1},{name:"shift",src:"pr\u00f3ximo|pr\u00f3xima|proximo|proxima",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}",
"{0} {unit=5-7} {shift}","{0} {shift} {unit=5-7}"],timeParse:["{shift} {weekday}","{weekday} {shift}","{date?} {1} {month} {1} {year?}"]});
Date.addLocale("fr",{plural:k,months:"janvier,f\u00e9vrier|fevrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre|decembre",weekdays:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi",units:"milliseconde:|s,seconde:|s,minute:|s,heure:|s,jour:|s,semaine:|s,mois,an:|s|n\u00e9e|nee",numbers:"un:|e,deux,trois,quatre,cinq,six,sept,huit,neuf,dix",optionals:["l'|la|le"],"short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",
past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"\u00e0",ampm:"am,pm",modifiers:[{name:"day",src:"hier",value:-1},{name:"day",src:"aujourd'hui",value:0},{name:"day",src:"demain",value:1},{name:"sign",src:"il y a",value:-1},{name:"sign",src:"dans|d'ici",value:1},{name:"shift",src:"derni:\u00e8r|er|\u00e8re|ere",value:-1},{name:"shift",src:"prochain:|e",value:1}],dateParse:["{sign} {num} {unit}","{sign} {num} {unit}","{0} {unit=5-7} {shift}"],timeParse:["{0} {date?} {month} {year?}",
"{0} {weekday} {shift}"]});
Date.addLocale("it",{plural:k,months:"Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre",weekdays:"Domenica,Luned:\u00ec|i,Marted:\u00ec|i,Mercoled:\u00ec|i,Gioved:\u00ec|i,Venerd:\u00ec|i,Sabato",units:"millisecond:o|i,second:o|i,minut:o|i,or:a|e,giorn:o|i,settiman:a|e,mes:e|i,ann:o|i",numbers:"un:|a|o|',due,tre,quattro,cinque,sei,sette,otto,nove,dieci",optionals:"l'|la|il","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"alle",ampm:"am,pm",modifiers:[{name:"day",src:"ieri",value:-1},{name:"day",src:"oggi",value:0},{name:"day",src:"domani",value:1},{name:"day",src:"dopodomani",value:2},{name:"sign",src:"fa",value:-1},{name:"sign",src:"da adesso",value:1},{name:"shift",src:"scors:o|a",value:-1},{name:"shift",src:"prossim:o|a",value:1}],dateParse:["{num} {unit} {sign}","{0} {unit=5-7} {shift}","{0} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}",
"{shift} {weekday}"]});
Date.addLocale("ja",{monthSuffix:"\u6708",weekdays:"\u65e5\u66dc\u65e5,\u6708\u66dc\u65e5,\u706b\u66dc\u65e5,\u6c34\u66dc\u65e5,\u6728\u66dc\u65e5,\u91d1\u66dc\u65e5,\u571f\u66dc\u65e5",units:"\u30df\u30ea\u79d2,\u79d2,\u5206,\u6642\u9593,\u65e5,\u9031\u9593|\u9031,\u30f6\u6708|\u30f5\u6708|\u6708,\u5e74","short":"{yyyy}\u5e74{M}\u6708{d}\u65e5","long":"{yyyy}\u5e74{M}\u6708{d}\u65e5 {H}\u6642{mm}\u5206",full:"{yyyy}\u5e74{M}\u6708{d}\u65e5 {Weekday} {H}\u6642{mm}\u5206{ss}\u79d2",past:"{num}{unit}{sign}",
future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"\u6642,\u5206,\u79d2",ampm:"\u5348\u524d,\u5348\u5f8c",modifiers:[{name:"day",src:"\u4e00\u6628\u65e5",value:-2},{name:"day",src:"\u6628\u65e5",value:-1},{name:"day",src:"\u4eca\u65e5",value:0},{name:"day",src:"\u660e\u65e5",value:1},{name:"day",src:"\u660e\u5f8c\u65e5",value:2},{name:"sign",src:"\u524d",value:-1},{name:"sign",src:"\u5f8c",value:1},{name:"shift",src:"\u53bb|\u5148",value:-1},{name:"shift",src:"\u6765",value:1}],dateParse:["{num}{unit}{sign}"],
timeParse:["{shift}{unit=5-7}{weekday?}","{year}\u5e74{month?}\u6708?{date?}\u65e5?","{month}\u6708{date?}\u65e5?","{date}\u65e5"]});
Date.addLocale("ko",{digitDate:k,monthSuffix:"\uc6d4",weekdays:"\uc77c\uc694\uc77c,\uc6d4\uc694\uc77c,\ud654\uc694\uc77c,\uc218\uc694\uc77c,\ubaa9\uc694\uc77c,\uae08\uc694\uc77c,\ud1a0\uc694\uc77c",units:"\ubc00\ub9ac\ucd08,\ucd08,\ubd84,\uc2dc\uac04,\uc77c,\uc8fc,\uac1c\uc6d4|\ub2ec,\ub144",numbers:"\uc77c|\ud55c,\uc774,\uc0bc,\uc0ac,\uc624,\uc721,\uce60,\ud314,\uad6c,\uc2ed","short":"{yyyy}\ub144{M}\uc6d4{d}\uc77c","long":"{yyyy}\ub144{M}\uc6d4{d}\uc77c {H}\uc2dc{mm}\ubd84",full:"{yyyy}\ub144{M}\uc6d4{d}\uc77c {Weekday} {H}\uc2dc{mm}\ubd84{ss}\ucd08",
past:"{num}{unit} {sign}",future:"{num}{unit} {sign}",duration:"{num}{unit}",timeSuffixes:"\uc2dc,\ubd84,\ucd08",ampm:"\uc624\uc804,\uc624\ud6c4",modifiers:[{name:"day",src:"\uadf8\uc800\uaed8",value:-2},{name:"day",src:"\uc5b4\uc81c",value:-1},{name:"day",src:"\uc624\ub298",value:0},{name:"day",src:"\ub0b4\uc77c",value:1},{name:"day",src:"\ubaa8\ub808",value:2},{name:"sign",src:"\uc804",value:-1},{name:"sign",src:"\ud6c4",value:1},{name:"shift",src:"\uc9c0\ub09c|\uc791",value:-1},{name:"shift",src:"\uc774\ubc88",
value:0},{name:"shift",src:"\ub2e4\uc74c|\ub0b4",value:1}],dateParse:["{num}{unit} {sign}","{shift?} {unit=5-7}"],timeParse:["{shift} {unit=5?} {weekday}","{year}\ub144{month?}\uc6d4?{date?}\uc77c?","{month}\uc6d4{date?}\uc77c?","{date}\uc77c"]});
Date.addLocale("nl",{plural:k,months:"januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december",weekdays:"zondag|zo,maandag|ma,dinsdag|di,woensdag|woe|wo,donderdag|do,vrijdag|vrij|vr,zaterdag|za",units:"milliseconde:|n,seconde:|n,minu:ut|ten,uur,dag:|en,we:ek|ken,maand:|en,jaar",numbers:"een,twee,drie,vier,vijf,zes,zeven,acht,negen",optionals:"","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",
future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"'s|om",ampm:"am,pm",modifiers:[{name:"day",src:"gisteren",value:-1},{name:"day",src:"vandaag",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"overmorgen",value:2},{name:"sign",src:"geleden",value:-1},{name:"sign",src:"vanaf nu",value:1},{name:"shift",src:"laatste|vorige|afgelopen",value:-1},{name:"shift",src:"volgend:|e",value:1}],dateParse:["{num} {unit} {sign}","{0} {unit=5-7} {shift}","{0} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}",
"{shift} {weekday}"]});
Date.addLocale("pl",{plural:k,months:"Stycze\u0144|Stycznia,Luty|Lutego,Marzec|Marca,Kwiecie\u0144|Kwietnia,Maj|Maja,Czerwiec|Czerwca,Lipiec|Lipca,Sierpie\u0144|Sierpnia,Wrzesie\u0144|Wrze\u015bnia,Pa\u017adziernik|Pa\u017adziernika,Listopad|Listopada,Grudzie\u0144|Grudnia",weekdays:"Niedziela|Niedziel\u0119,Poniedzia\u0142ek,Wtorek,\u015arod:a|\u0119,Czwartek,Pi\u0105tek,Sobota|Sobot\u0119",units:"milisekund:a|y|,sekund:a|y|,minut:a|y|,godzin:a|y|,dzie\u0144|dni,tydzie\u0144|tygodnie|tygodni,miesi\u0105ce|miesi\u0105ce|miesi\u0119cy,rok|lata|lat",numbers:"jeden|jedn\u0105,dwa|dwie,trzy,cztery,pi\u0119\u0107,sze\u015b\u0107,siedem,osiem,dziewi\u0119\u0107,dziesi\u0119\u0107",
optionals:"w|we,roku","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday}, {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"o",ampm:"am,pm",modifiers:[{name:"day",src:"przedwczoraj",value:-2},{name:"day",src:"wczoraj",value:-1},{name:"day",src:"dzisiaj|dzi\u015b",value:0},{name:"day",src:"jutro",value:1},{name:"day",src:"pojutrze",value:2},{name:"sign",src:"temu|przed",value:-1},{name:"sign",
src:"za",value:1},{name:"shift",src:"zesz\u0142y|zesz\u0142a|ostatni|ostatnia",value:-1},{name:"shift",src:"nast\u0119pny|nast\u0119pna|nast\u0119pnego|przysz\u0142y|przysz\u0142a|przysz\u0142ego",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}","{0} {shift?} {weekday}"],timeParse:["{date} {month} {year?} {1}","{0} {shift?} {weekday}"]});
Date.addLocale("pt",{plural:k,months:"janeiro,fevereiro,mar\u00e7o,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro",weekdays:"domingo,segunda-feira,ter\u00e7a-feira,quarta-feira,quinta-feira,sexta-feira,s\u00e1bado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,dia:|s,semana:|s,m\u00eas|m\u00eases|mes|meses,ano:|s",numbers:"um,dois,tr\u00eas|tres,quatro,cinco,seis,sete,oito,nove,dez,uma,duas",optionals:"a,de","short":"{d} de {month} de {yyyy}","long":"{d} de {month} de {yyyy} {H}:{mm}",
full:"{Weekday}, {d} de {month} de {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"\u00e0s",ampm:"am,pm",modifiers:[{name:"day",src:"anteontem",value:-2},{name:"day",src:"ontem",value:-1},{name:"day",src:"hoje",value:0},{name:"day",src:"amanh:\u00e3|a",value:1},{name:"sign",src:"atr\u00e1s|atras|h\u00e1|ha",value:-1},{name:"sign",src:"daqui a",value:1},{name:"shift",src:"passad:o|a",value:-1},{name:"shift",src:"pr\u00f3ximo|pr\u00f3xima|proximo|proxima",
value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0} {unit=5-7} {shift}","{0} {shift} {unit=5-7}"],timeParse:["{date?} {1} {month} {1} {year?}","{0} {shift} {weekday}"]});
Date.addLocale("ru",{months:"\u042f\u043d\u0432\u0430\u0440:\u044f|\u044c,\u0424\u0435\u0432\u0440\u0430\u043b:\u044f|\u044c,\u041c\u0430\u0440\u0442:\u0430|,\u0410\u043f\u0440\u0435\u043b:\u044f|\u044c,\u041c\u0430:\u044f|\u0439,\u0418\u044e\u043d:\u044f|\u044c,\u0418\u044e\u043b:\u044f|\u044c,\u0410\u0432\u0433\u0443\u0441\u0442:\u0430|,\u0421\u0435\u043d\u0442\u044f\u0431\u0440:\u044f|\u044c,\u041e\u043a\u0442\u044f\u0431\u0440:\u044f|\u044c,\u041d\u043e\u044f\u0431\u0440:\u044f|\u044c,\u0414\u0435\u043a\u0430\u0431\u0440:\u044f|\u044c",weekdays:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0412\u0442\u043e\u0440\u043d\u0438\u043a,\u0421\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440\u0433,\u041f\u044f\u0442\u043d\u0438\u0446\u0430,\u0421\u0443\u0431\u0431\u043e\u0442\u0430",
units:"\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434:\u0430|\u0443|\u044b|,\u0441\u0435\u043a\u0443\u043d\u0434:\u0430|\u0443|\u044b|,\u043c\u0438\u043d\u0443\u0442:\u0430|\u0443|\u044b|,\u0447\u0430\u0441:||\u0430|\u043e\u0432,\u0434\u0435\u043d\u044c|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0434\u043d\u0435\u0439,\u043d\u0435\u0434\u0435\u043b:\u044f|\u044e|\u0438|\u044c|\u0435,\u043c\u0435\u0441\u044f\u0446:||\u0430|\u0435\u0432|\u0435,\u0433\u043e\u0434|\u0433\u043e\u0434|\u0433\u043e\u0434\u0430|\u043b\u0435\u0442|\u0433\u043e\u0434\u0443",
numbers:"\u043e\u0434:\u0438\u043d|\u043d\u0443,\u0434\u0432:\u0430|\u0435,\u0442\u0440\u0438,\u0447\u0435\u0442\u044b\u0440\u0435,\u043f\u044f\u0442\u044c,\u0448\u0435\u0441\u0442\u044c,\u0441\u0435\u043c\u044c,\u0432\u043e\u0441\u0435\u043c\u044c,\u0434\u0435\u0432\u044f\u0442\u044c,\u0434\u0435\u0441\u044f\u0442\u044c",optionals:"\u0432|\u043d\u0430,\u0433\u043e\u0434\u0430","short":"{d} {month} {yyyy} \u0433\u043e\u0434\u0430","long":"{d} {month} {yyyy} \u0433\u043e\u0434\u0430 {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} \u0433\u043e\u0434\u0430 {H}:{mm}:{ss}",
past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"\u0432",ampm:" \u0443\u0442\u0440\u0430, \u0432\u0435\u0447\u0435\u0440\u0430",modifiers:[{name:"day",src:"\u043f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430",value:-2},{name:"day",src:"\u0432\u0447\u0435\u0440\u0430",value:-1},{name:"day",src:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",value:0},{name:"day",src:"\u0437\u0430\u0432\u0442\u0440\u0430",value:1},{name:"day",src:"\u043f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430",
value:2},{name:"sign",src:"\u043d\u0430\u0437\u0430\u0434",value:-1},{name:"sign",src:"\u0447\u0435\u0440\u0435\u0437",value:1},{name:"shift",src:"\u043f\u0440\u043e\u0448\u043b:\u044b\u0439|\u043e\u0439|\u043e\u043c",value:-1},{name:"shift",src:"\u0441\u043b\u0435\u0434\u0443\u044e\u0449:\u0438\u0439|\u0435\u0439|\u0435\u043c",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{0} {shift} {unit=5-7}"],timeParse:["{date} {month} {year?} {1}","{0} {shift} {weekday}"]});
Date.addLocale("sv",{plural:k,months:"januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december",weekdays:"s\u00f6ndag|sondag,m\u00e5ndag:|en+mandag:|en,tisdag,onsdag,torsdag,fredag,l\u00f6rdag|lordag",units:"millisekund:|er,sekund:|er,minut:|er,timm:e|ar,dag:|ar,veck:a|or|an,m\u00e5nad:|er|en+manad:|er|en,\u00e5r:||et+ar:||et",numbers:"en|ett,tv\u00e5|tva,tre,fyra,fem,sex,sju,\u00e5tta|atta,nio,tio",optionals:"den,f\u00f6r|for",articles:"den","short":"den {d} {month} {yyyy}",
"long":"den {d} {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"f\u00f6rrg\u00e5r|i f\u00f6rrg\u00e5r|if\u00f6rrg\u00e5r|forrgar|i forrgar|iforrgar",value:-2},{name:"day",src:"g\u00e5r|i g\u00e5r|ig\u00e5r|gar|i gar|igar",value:-1},{name:"day",src:"dag|i dag|idag",value:0},{name:"day",src:"morgon|i morgon|imorgon",value:1},{name:"day",src:"\u00f6ver morgon|\u00f6vermorgon|i \u00f6ver morgon|i \u00f6vermorgon|i\u00f6vermorgon|over morgon|overmorgon|i over morgon|i overmorgon|iovermorgon",
value:2},{name:"sign",src:"sedan|sen",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i f\u00f6rra|f\u00f6rra|i forra|forra",value:-1},{name:"shift",src:"denna",value:0},{name:"shift",src:"n\u00e4sta|nasta",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1} {num} {unit} {sign}","{shift} {unit5-7}"],timeParse:["{0} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]});
Date.addLocale("zh-CN",{variant:k,monthSuffix:"\u6708",weekdays:"\u661f\u671f\u65e5|\u5468\u65e5,\u661f\u671f\u4e00|\u5468\u4e00,\u661f\u671f\u4e8c|\u5468\u4e8c,\u661f\u671f\u4e09|\u5468\u4e09,\u661f\u671f\u56db|\u5468\u56db,\u661f\u671f\u4e94|\u5468\u4e94,\u661f\u671f\u516d|\u5468\u516d",units:"\u6beb\u79d2,\u79d2\u949f,\u5206\u949f,\u5c0f\u65f6,\u5929,\u4e2a\u661f\u671f|\u5468,\u4e2a\u6708,\u5e74",optionals:"\u65e5|\u53f7","short":"{yyyy}\u5e74{M}\u6708{d}\u65e5","long":"{yyyy}\u5e74{M}\u6708{d}\u65e5 {tt}{h}:{mm}",
full:"{yyyy}\u5e74{M}\u6708{d}\u65e5 {weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"\u70b9|\u65f6,\u5206\u949f?,\u79d2",ampm:"\u4e0a\u5348,\u4e0b\u5348",modifiers:[{name:"day",src:"\u524d\u5929",value:-2},{name:"day",src:"\u6628\u5929",value:-1},{name:"day",src:"\u4eca\u5929",value:0},{name:"day",src:"\u660e\u5929",value:1},{name:"day",src:"\u540e\u5929",value:2},{name:"sign",src:"\u524d",value:-1},{name:"sign",src:"\u540e",value:1},
{name:"shift",src:"\u4e0a|\u53bb",value:-1},{name:"shift",src:"\u8fd9",value:0},{name:"shift",src:"\u4e0b|\u660e",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}\u5e74{month?}\u6708?{date?}{0}","{month}\u6708{date?}{0}","{date}{0}"]});
Date.addLocale("zh-TW",{monthSuffix:"\u6708",weekdays:"\u661f\u671f\u65e5|\u9031\u65e5,\u661f\u671f\u4e00|\u9031\u4e00,\u661f\u671f\u4e8c|\u9031\u4e8c,\u661f\u671f\u4e09|\u9031\u4e09,\u661f\u671f\u56db|\u9031\u56db,\u661f\u671f\u4e94|\u9031\u4e94,\u661f\u671f\u516d|\u9031\u516d",units:"\u6beb\u79d2,\u79d2\u9418,\u5206\u9418,\u5c0f\u6642,\u5929,\u500b\u661f\u671f|\u9031,\u500b\u6708,\u5e74",optionals:"\u65e5|\u865f","short":"{yyyy}\u5e74{M}\u6708{d}\u65e5","long":"{yyyy}\u5e74{M}\u6708{d}\u65e5 {tt}{h}:{mm}",
full:"{yyyy}\u5e74{M}\u6708{d}\u65e5 {Weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"\u9ede|\u6642,\u5206\u9418?,\u79d2",ampm:"\u4e0a\u5348,\u4e0b\u5348",modifiers:[{name:"day",src:"\u524d\u5929",value:-2},{name:"day",src:"\u6628\u5929",value:-1},{name:"day",src:"\u4eca\u5929",value:0},{name:"day",src:"\u660e\u5929",value:1},{name:"day",src:"\u5f8c\u5929",value:2},{name:"sign",src:"\u524d",value:-1},{name:"sign",src:"\u5f8c",value:1},
{name:"shift",src:"\u4e0a|\u53bb",value:-1},{name:"shift",src:"\u9019",value:0},{name:"shift",src:"\u4e0b|\u660e",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}\u5e74{month?}\u6708?{date?}{0}","{month}\u6708{date?}{0}","{date}{0}"]});
