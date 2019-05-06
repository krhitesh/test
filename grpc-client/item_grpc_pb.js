// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var item_pb = require('./item_pb.js');
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

function serialize_item_ItemsRtdbRelation(arg) {
  if (!(arg instanceof item_pb.ItemsRtdbRelation)) {
    throw new Error('Expected argument of type item.ItemsRtdbRelation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_item_ItemsRtdbRelation(buffer_arg) {
  return item_pb.ItemsRtdbRelation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_item_ListOfItems(arg) {
  if (!(arg instanceof item_pb.ListOfItems)) {
    throw new Error('Expected argument of type item.ListOfItems');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_item_ListOfItems(buffer_arg) {
  return item_pb.ListOfItems.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_item_UpdateItemsObject(arg) {
  if (!(arg instanceof item_pb.UpdateItemsObject)) {
    throw new Error('Expected argument of type item.UpdateItemsObject');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_item_UpdateItemsObject(buffer_arg) {
  return item_pb.UpdateItemsObject.deserializeBinary(new Uint8Array(buffer_arg));
}


// The item service definition.
var ItemServiceService = exports.ItemServiceService = {
  createItem: {
    path: '/item.ItemService/CreateItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.ListOfItems,
    responseType: commons_pb.Response,
    requestSerialize: serialize_item_ListOfItems,
    requestDeserialize: deserialize_item_ListOfItems,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  updateItem: {
    path: '/item.ItemService/UpdateItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.UpdateItemsObject,
    responseType: commons_pb.Response,
    requestSerialize: serialize_item_UpdateItemsObject,
    requestDeserialize: deserialize_item_UpdateItemsObject,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  deleteItem: {
    path: '/item.ItemService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.ItemsRtdbRelation,
    responseType: commons_pb.Response,
    requestSerialize: serialize_item_ItemsRtdbRelation,
    requestDeserialize: deserialize_item_ItemsRtdbRelation,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
};

exports.ItemServiceClient = grpc.makeGenericClientConstructor(ItemServiceService);
