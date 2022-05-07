#FOR ADMINSTRATION

#GET ADMINSTRATION
http://localhost:8080/api/admin/AdminstrationOffices

#GET By ID
http://localhost:8080/api/admin/AdminstrationOffice/{id}

#POST
http://localhost:8080/api/admin/AddadminstrationOffice

#PUT
http://localhost:8080/api/admin/AdminstrationOffice/{id}

#DELETE
http://localhost:8080/api/admin/AdminstrationOffice/{id}

#Requests
{
	"address":"your address",
    "available_spaces":15,
    "floor":"L2",
    "seat_capacity":100
}
-----------------------------------------------------------------------------------------
#FOR SEAT-BOOKING


#GET SEAT-BOOKING
http://localhost:8080/api/seatbooking/SeatBookings

#GET By ID
http://localhost:8080/api/seatbooking/SeatBooking/{id}

#POST
http://localhost:8080/api/seatbooking/AddSeatBooking

#PUT
http://localhost:8080/api/seatbooking/SeatBooking/{id}

#DELETE
http://localhost:8080/api/seatbooking/SeatBooking/{id}

#Requests
{
	"name":"your name",
	"email":"yourmail@gmail.com",
	"address":"your address",
    "seats":5,
    "mobile":"123456"
}
