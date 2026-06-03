import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookSeat, cancelSeat } from './TicketSlice'

function MovieTicket() {
    let seats = useSelector(state=>state.ticket.seats)
    let dispatch = useDispatch()
    let bookedCount = seats.filter(seat=>seat.booked).length
  return (
    <div>
        <h1>Movie Ticket Booking</h1>
        <h2>Booked Seats :{bookedCount}</h2>
        {
            seats.map(seat=>(
                <div key={seat.id}>
                    Seat {seat.id}-{' '}
                    {seat.booked ? 'Booked':'Avialble'}
                    {
                        seat.booked ? (
                            <button onClick={()=>dispatch(cancelSeat(seat.id))}>Cancel</button>
                        ):(
                            <button onClick={()=>dispatch(bookSeat(seat.id))}>Book</button>
                        )
                    }
                </div>
            ))
        }
    </div>
  )
}

export default MovieTicket