/*
   Association vs Composition vs Inheritance vs Aggregation

   inheritance : is a relationship
   Association : has a reletionship

             Association
                /    \
               /      \ 
            Aggregation  Composition




Aggregation : 
     Aggregation describes the relationship between the container and the object it contains.
      An object may contain an aggregate of another object. Aggregation is denoted by a line with an unfilled diamond head towards the container.

     Aggregation is a weaker relationship because:
     - Aggregate objects are not a part of the container.
     - Aggregate objects can exist independently.





Composition : 
An object may be composed of smaller objects, and the relationship between the “part” objects and “whole” objects is known as composition.
also know as part of relationship

In the example below, the Chair class can be composed of other objects of Arm, Seat, and Leg types.
Composition is denoted by a line with a filled diamond head at the composer class pointing to the component class.

Composition is a strong relationship because:
    - The composed object becomes a part of the composer.
    - Composed objects can not exist independently.
*/