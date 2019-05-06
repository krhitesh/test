const grpc = require('grpc');
const items = require('./items.json')
const tps = require('./tps.json')
const ItemMessages = require('./grpc-client/item_pb');
let ItemServices = require('./grpc-client/item_grpc_pb');
let itemClient = new ItemServices.ItemServiceClient("35.244.28.184:80", grpc.credentials.createInsecure());


const main = () => {

    let items_added = []

    Object.keys(items).map(userId => {

        Object.keys(items[userId]).map(itemId => {

            const item = items[userId][itemId]

            if(items_added.includes(itemId) || (item.owner === 1 && item.type == "receiver") || (item.owner ===2 && item.type==="sender")) {
                return;
            }

            grpcCreateItem(userId, item)

            items_added.push(itemId)


        })

    })

}


const grpcCreateItem = async (ownerId, itemData) => {
    let il = new ItemMessages.Item();
    il.setRtdbId(itemData.id);
    il.setAlert(itemData.alert || false);
    il.setDeleted(false);
    // il.setDeletedTimestamp(itemData.deletedTimestamp || new Date().getTime());
    il.setName(itemData.itemInfo.name);
    il.setEndLat(itemData.endLat);
    il.setEndLon(itemData.endLon);
    il.setStartLat(itemData.startLat);
    il.setStartLon(itemData.startLon);
    il.setStartAddr(itemData.startLoc);
    il.setEndAddr(itemData.endLoc);
    il.setEndTime(itemData.endTime);
    il.setCategory(itemData.itemInfo.category);
    il.setDescription(itemData.itemInfo.description);
    il.setLengthUnit(itemData.itemInfo.length_unit);
    il.setWidthUnit(itemData.itemInfo.width_unit);
    il.setHeightUnit(itemData.itemInfo.height_unit);
    il.setWeightUnit(itemData.itemInfo.weight_unit);
    il.setValue(itemData.itemInfo.value);
    il.setLength(itemData.itemInfo.length);
    il.setHeight(itemData.itemInfo.height);
    il.setWidth(itemData.itemInfo.width);
    il.setWeight(itemData.itemInfo.weight);
    il.setImage(itemData.itemInfo.images['0']);
    il.setImageThumbnail(itemData.itemInfo.imageThumbnail);
    il.setPersonName(itemData.personName);
    il.setPersonPhone(itemData.personPhone);
    il.setOwner(itemData.owner);
    il.setOwnerId(ownerId);
    il.setRequestCount(0);
    il.setStatus(itemData.status);
    il.setType(itemData.type);
    il.setNegotiable(itemData.itemInfo.negotiable);
    il.setNotificationsCount(0);
    il.setViewsCount(0);

    let request = new ItemMessages.ListOfItems();
    request.setItemsList([il]);
    console.log("Requesting to add item ", itemData.id)
    itemClient.createItem(request /* , {deadline: new Date().getTime() + 7000} */, (err, response) => {
        
        console.log("grpc response:", err, response.getSuccess());
    });
};