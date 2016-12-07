
		// wszystkie elementy <div>, posiadające zarówno klasę "grid" oraz klasę "grid-12"
		var allDivs = $("div.grid.grid-12");

		//wszystkie elementy <a>, których "href" zaczyna się na "http", 
		//znajdujące się w elemencie o klasie "nav"
		var allAs = $(".nav a[href^='http']");

		//wszystkie elementy <input>, których typ to "ratio" lub "checkbox" 
		//oraz dodatkowo nie są aktualnie zaznaczone(checked)
		var allInputs = $("input:radio:not(:checked), input:checkbox:not(:checked)");
		
		//wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) 
		//oraz znajduje się w elemencie <div> z identyfikatorem "text"
		var firstP = $("div#text p:empty:first");

		//wszystkie elementy z klasą "pagination-item", które nie są elementem <span>
		var allElements = $(".pagination-item:not(span)");