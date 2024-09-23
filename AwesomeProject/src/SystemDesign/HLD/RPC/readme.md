RPCS - Remote procedure calls
  - RPC is an interprocess(inter service) communication protocol that’s widely used in distributed systems
  - RPC spans the transport and application layers
  - it is designed to make network call look just like local call by abstracting all complexities like serialization,deserializationa and transport




During the RPC process, the following steps occur:

1. A client initiates a client stub process by giving parameters as normal. The client stub is stored in the address space of the client.
2. The client stub converts the parameters into a standardized format and packs them into a message. After packing the parameter into a message, the client stub requests the local RPC runtime to deliver the message to the server.
3. The RPC runtime at the client delivers the message to the server over the network. After sending a message to the server, it waits for the message result from the server.
4. RPC runtime at the server receives the message and passes it to the server stub.

Note: The RPC runtime is responsible for transmitting messages between client and server via the network. The responsibilities of RPC runtime also include retransmission, acknowledgment, and encryption.

5. The server stub unpacks the message, takes the parameters out of it, and calls the desired server routine, using a local procedure call, to do the required execution.

6. After the server routine has been executed with the given parameters, the result is returned to the server stub.
7. The server stub packs the returned result into a message and sends it to the RPC runtime at the server on the transport layer.
8. The server’s RPC runtime returns the packed result to the client’s RPC runtime over the network.
9. The client’s RPC runtime that was waiting for the result now receives the result and sends it to the client stub.
10. The client stub unpacks the result, and the execution process returns to the caller at this point.s