// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var matching_pb = require('./matching_pb.js');

function serialize_matching_ItemMatchesResponse(arg) {
  if (!(arg instanceof matching_pb.ItemMatchesResponse)) {
    throw new Error('Expected argument of type matching.ItemMatchesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_matching_ItemMatchesResponse(buffer_arg) {
  return matching_pb.ItemMatchesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matching_MatchesRequest(arg) {
  if (!(arg instanceof matching_pb.MatchesRequest)) {
    throw new Error('Expected argument of type matching.MatchesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_matching_MatchesRequest(buffer_arg) {
  return matching_pb.MatchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matching_TravelPlanMatchesResponse(arg) {
  if (!(arg instanceof matching_pb.TravelPlanMatchesResponse)) {
    throw new Error('Expected argument of type matching.TravelPlanMatchesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_matching_TravelPlanMatchesResponse(buffer_arg) {
  return matching_pb.TravelPlanMatchesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The matching service definition.
var MatchingService = exports.MatchingService = {
  getItemMatches: {
    path: '/matching.Matching/GetItemMatches',
    requestStream: false,
    responseStream: false,
    requestType: matching_pb.MatchesRequest,
    responseType: matching_pb.ItemMatchesResponse,
    requestSerialize: serialize_matching_MatchesRequest,
    requestDeserialize: deserialize_matching_MatchesRequest,
    responseSerialize: serialize_matching_ItemMatchesResponse,
    responseDeserialize: deserialize_matching_ItemMatchesResponse,
  },
  getTravelPlanMatches: {
    path: '/matching.Matching/GetTravelPlanMatches',
    requestStream: false,
    responseStream: false,
    requestType: matching_pb.MatchesRequest,
    responseType: matching_pb.TravelPlanMatchesResponse,
    requestSerialize: serialize_matching_MatchesRequest,
    requestDeserialize: deserialize_matching_MatchesRequest,
    responseSerialize: serialize_matching_TravelPlanMatchesResponse,
    responseDeserialize: deserialize_matching_TravelPlanMatchesResponse,
  },
};

exports.MatchingClient = grpc.makeGenericClientConstructor(MatchingService);
