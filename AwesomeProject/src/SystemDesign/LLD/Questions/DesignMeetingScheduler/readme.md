# Requirements
R1: There should be an n number of meeting rooms.

R2: Each meeting room should have a specific capacity to accommodate the desired number of people.

R3: If not reserved already, each meeting room should have the ability to be booked, along with setting an interval, a start time, and an end time for the meeting.

R4: A notification should be sent to all the people invited to the meeting.

R5: Users will receive an invite regardless of whether they are available at the interval or not. Users can respond to the invitation by either accepting or rejecting the invite.

R6: Each user should have access to a calendar that is used to track the date and time, as well as to schedule or cancel meetings.


# Actors

Primary actors 
    Scheduler: This actor can schedule and cancel meetings and book and release meeting rooms.
    User: This actor can accept and reject invitations and will decide their presence for the meetings.

Secondary actors
    System: This is responsible for sending out notifications regarding any new meetings or cancellations.


Scheduler:
 - Schedule/Cancel meeting: To schedule a new meeting or cancel an existing one
 - Book/Release room: To book a room for a meeting or release it

User
 - Attend meeting: To attend a meeting
 - Accept/Reject meeting: To accept or reject a meeting invitation

System
 - Send invite notification: To send a notification of any new meeting invitations
 - Send cancelation notification: To send a notification of any meeting cancellations
