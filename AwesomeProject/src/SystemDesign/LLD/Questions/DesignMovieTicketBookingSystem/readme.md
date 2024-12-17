# Requirement collection

R1: There exist multiple cinemas in the city, and the cinema has multiple halls.

R2: Each movie in the cinema can have multiple shows, however, one hall will only show one show at a time.

R3: The cinema displays all available showtimes of a movie.

R4: Users can search movies based on the following four criteria: title, language, genre, and release date.

R5: Users can make a booking at any cinema hall at the available showtime.

R6: The booking can either be made by the customer online or via a walk-in by the ticket agent.

R7: Online customers can only pay using a credit card, while walk-in customers can pay using cash or credit card through the ticket agent.

R8: Users can select multiple available seats for a show from a given seating arrangement.

R9: Each seat type has a fixed cost. There are three types of seats: silver, gold, and platinum.

R10: There can only be one ticket allocated per seat.

R11: No two customers should be able to reserve the same seat.

R12: The admin can perform the following five actions on the show times and the movie:
Add a show
Delete a show
Update a show
Add a movie
Delete a movie

R13: The system should be able to differentiate between available and booked seats.

R14: The system should generate a notification for the following three cases:
A new movie has been released.
A booking has been made.
A booking has been canceled.


## Admin
Add show: To add a new show for any particular movie

Modify show: To modify a show

Delete show: To delete or cancel a show

Add movie: To add a new movie to the calendar

Search movie: To search for any particular movie based on the given criteria (title, language, genre, release date)

Delete movie: To delete any particular movie


## Customer
Search movie: To search for any particular movie based on the given criteria (title, language, genre, release date) // imp used in many questions

Create/Modify/View/Cancel booking: To create or cancel a booking for any show of a movie, and to view or modify the booking details for any show of a movie

Reserve a seat: To reserve a seat from the available seats on a seating map for any show of a movie

Pay using credit card/cash: To pay the movie ticket fee via credit card or cash

# secondary

## Ticket agent
Search movie: To search for any particular movie based on the given criteria (title, language, genre, release date)

Create/View booking: To create a booking for any show of a movie and view its details

Reserve a seat: To reserve a seat from the available seats on a seating map for any show of a movie

## System
Send new movie notification: To send a notification of any new movie launched

Send booking notification: To send a notification of the bookings made

Send cancellation notification: To send a notification of any canceled bookings


