
// elements created section//
let ticketSection = document.createElement("div");
let showsDiv = document.createElement("div");
let ShowsContainer = document.createElement("div");
let ronaldLaneShows = document.createElement("ul");
let ronaldLaneShowsDate = document.createElement("li");
let ronaldLaneShowsVenue = document.createElement("li");
let ronaldLaneLocation = document.createElement("li");
let ronaldLaneTickets = document.createElement("li");


// class list //
showsDiv.classList.add("shows-div");
ShowsContainer.classList.add("shows-container");
ticketSection.classList.add("tickets-section");
ronaldLaneShows.classList.add("ronald-lane-div");
ronaldLaneShowsDate.classList.add("concert-dates");
ronaldLaneLocation.classList.add("concert-location");
ronaldLaneShowsVenue.classList.add("concert-venue")
ronaldLaneTickets.classList.add("concert-tickets");



// PIER 3 EAST ELEMENTS //

let pierContainer = document.createElement("div");
let pierShows = document.createElement("ul");
let pierShowsDate = document.createElement("li");
let pierShowsVenue = document.createElement("li");
let pierLocation = document.createElement("li");
let pierTickets = document.createElement("li");

// class list//
pierContainer.classList.add("pier-east-container");
pierShows.classList.add("pier-shows-ul");
pierShowsDate.classList.add("concert-dates");
pierLocation.classList.add("concert-location");
pierShowsVenue.classList.add("concert-venue");
ronaldLaneTickets.classList.add("concert-tickets");


// view lounge elements //


let loungeContainer = document.createElement("div");
let loungeShows = document.createElement("ul");
let loungeShowsDate = document.createElement("li");
let loungeShowsVenue = document.createElement("li");
let loungeLocation = document.createElement("li");
let loungeTickets = document.createElement("li");


//class list//

loungeContainer.classList.add("lounge-venue-div");
loungeShows.classList.add("lounge-venue-ul");

//  HYATT AGENCY ELEMENTS//

let hyattContainer = document.createElement("div");
let hyattShows = document.createElement("ul");
let hyattShowsDate = document.createElement("li");
let hyattShowsVenue = document.createElement("li");
let hyattLocation = document.createElement("li");
let hyattTickets = document.createElement("li");

//class list //
hyattContainer.classList.add("hyatt-agency-div");
hyattShows.classList.add("haytt-agency-ul");




//moscow center elements //

let moscowContainer = document.createElement("div");
let moscowShows = document.createElement("ul");
let moscowShowsDate = document.createElement("li");
let moscowShowsVenue = document.createElement("li");
let moscowLocation = document.createElement("li");
let moscowTickets = document.createElement("li");

//class list//
moscowContainer.classList.add("moscow-center-div");
moscowShows.classList.add("moscow-center-ul");

// PRESS CLUB ELEMENTS //

let pressContainer = document.createElement("div");
let pressShows = document.createElement("ul");
let pressShowsDate = document.createElement("li");
let pressShowsVenue = document.createElement("li");
let pressLocation = document.createElement("li");
let pressTickets = document.createElement("li");

// class list //
pressContainer.classList.add("press-club-div");
pressShows.classList.add("press-club-ul");






















// text value for every element//
ronaldLaneShowsDate.innerHTML = "Mon Sept 06 2021";
ronaldLaneShowsVenue.innerHTML = "Ronald Lane";
ronaldLaneLocation.innerHTML = "San Francisco, CA ";
ronaldLaneTickets.innerHTML = "BUY TICKETS";

// PIER 3 EAST TEXT VALUE //
pierShowsDate.innerHTML = "Tue Sept 21 2021";
pierShowsVenue.innerHTML = "Pier 3 East";
pierLocation.innerHTML = "San Francisco, CA ";
pierTickets.innerHTML = "BUY TICKETS";


// view lounge text value//
loungeShowsDate.innerHTML = "Fri Oct 15 2021";
loungeShowsVenue.innerHTML = "View Lounge";
loungeLocation.innerHTML = "San Francisco, CA ";
loungeTickets.innerHTML = "BUY TICKETS";

// HYATT TEXT VALUE//

hyattShowsDate.innerHTML = "Sat Nov 06 2021";
hyattShowsVenue.innerHTML = "Hyatt Agency";
hyattLocation.innerHTML = "San Francisco, CA ";
hyattTickets.innerHTML = "BUY TICKETS";

//moscow center text value //
moscowShowsDate.innerHTML = "Fri Nov 26 2021";
moscowShowsVenue.innerHTML = "Moscow Center";
moscowLocation.innerHTML = "San Francisco, CA ";
moscowTickets.innerHTML = "BUY TICKETS";

//press club text value //

pressShowsDate.innerHTML = ("Wed Dec 15 2021");
pressShowsVenue.innerHTML = "Press Club";
pressLocation.innerHTML = "San Francisco, CA ";
pressTickets.innerHTML = "BUY TICKETS";


// title section text value//

showsTitleDiv.innerHTML = "SHOWS";



//elements appended section//
ticketSection.appendChild(showsDiv);
showsDiv.appendChild(ShowsContainer);
ShowsContainer.appendChild(ronaldLaneShows);
ronaldLaneShows.appendChild(ronaldLaneShowsDate);
ronaldLaneShows.appendChild(ronaldLaneShowsVenue);
ronaldLaneShows.appendChild(ronaldLaneLocation);
ronaldLaneShows.appendChild(ronaldLaneTickets);


//PIER ELEMENTS APPENDED
showsDiv.appendChild(pierContainer);
pierContainer.appendChild(pierShows);
pierShows.appendChild(pierShowsDate);
pierShows.appendChild(pierShowsVenue);
pierShows.appendChild(pierLocation);
pierShows.appendChild(pierTickets);

// lounge elements appended //
showsDiv.appendChild(loungeContainer);
loungeContainer.appendChild(loungeShows);
loungeShows.appendChild(loungeShowsDate);
loungeShows.appendChild(loungeShowsVenue);
loungeShows.appendChild(loungeLocation);
loungeShows.appendChild(loungeTickets);


// HYATT ELEMENTS APPENDED//

showsDiv.appendChild(hyattContainer);
hyattContainer.appendChild(hyattShows);
hyattShows.appendChild(hyattShowsDate);
hyattShows.appendChild(hyattShowsVenue);
hyattShows.appendChild(hyattLocation);
hyattShows.appendChild(hyattTickets);

//moscow  center elements appended//

showsDiv.appendChild(moscowContainer);
moscowContainer.appendChild(moscowShows);
moscowShows.appendChild(moscowShowsDate);
moscowShows.appendChild(moscowShowsVenue);
moscowShows.appendChild(moscowLocation);
moscowShows.appendChild(moscowTickets);

// PRESS CLUB ELEMENTS APPENDED
showsDiv.appendChild(pressContainer);
pressContainer.appendChild(pressShows);
pressShows.appendChild(pressShowsDate);
pressShows.appendChild(pressShowsVenue);
pressShows.appendChild(pressLocation);
pressShows.appendChild(pressTickets);



















document.body.appendChild(ticketSection);



