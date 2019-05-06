// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var travel$plans_pb = require('./travel-plans_pb.js');
var commons_pb = require('./commons_pb.js');

function serialize_Response(arg) {
  if (!(arg instanceof commons_pb.Response)) {
    throw new Error('Expected argument of type Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return commons_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelplan_ListOfTravelPlans(arg) {
  if (!(arg instanceof travel$plans_pb.ListOfTravelPlans)) {
    throw new Error('Expected argument of type travelplan.ListOfTravelPlans');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_travelplan_ListOfTravelPlans(buffer_arg) {
  return travel$plans_pb.ListOfTravelPlans.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelplan_TravelPlansRtdbRelation(arg) {
  if (!(arg instanceof travel$plans_pb.TravelPlansRtdbRelation)) {
    throw new Error('Expected argument of type travelplan.TravelPlansRtdbRelation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_travelplan_TravelPlansRtdbRelation(buffer_arg) {
  return travel$plans_pb.TravelPlansRtdbRelation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_travelplan_UpdateTravelPlansObject(arg) {
  if (!(arg instanceof travel$plans_pb.UpdateTravelPlansObject)) {
    throw new Error('Expected argument of type travelplan.UpdateTravelPlansObject');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_travelplan_UpdateTravelPlansObject(buffer_arg) {
  return travel$plans_pb.UpdateTravelPlansObject.deserializeBinary(new Uint8Array(buffer_arg));
}


// The travel plan service definition.
var TravelPlanServiceService = exports.TravelPlanServiceService = {
  createTravelPlans: {
    path: '/travelplan.TravelPlanService/CreateTravelPlans',
    requestStream: false,
    responseStream: false,
    requestType: travel$plans_pb.ListOfTravelPlans,
    responseType: commons_pb.Response,
    requestSerialize: serialize_travelplan_ListOfTravelPlans,
    requestDeserialize: deserialize_travelplan_ListOfTravelPlans,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  updateTravelPlans: {
    path: '/travelplan.TravelPlanService/UpdateTravelPlans',
    requestStream: false,
    responseStream: false,
    requestType: travel$plans_pb.UpdateTravelPlansObject,
    responseType: commons_pb.Response,
    requestSerialize: serialize_travelplan_UpdateTravelPlansObject,
    requestDeserialize: deserialize_travelplan_UpdateTravelPlansObject,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  deleteTravelPlans: {
    path: '/travelplan.TravelPlanService/DeleteTravelPlans',
    requestStream: false,
    responseStream: false,
    requestType: travel$plans_pb.TravelPlansRtdbRelation,
    responseType: commons_pb.Response,
    requestSerialize: serialize_travelplan_TravelPlansRtdbRelation,
    requestDeserialize: deserialize_travelplan_TravelPlansRtdbRelation,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
};

exports.TravelPlanServiceClient = grpc.makeGenericClientConstructor(TravelPlanServiceService);
