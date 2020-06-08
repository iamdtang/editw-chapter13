import JSONSerializer from '@ember-data/serializer/json';

export default class SubredditSerializer extends JSONSerializer {
  normalizeFindRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    return super.normalizeFindRecordResponse(
      store,
      primaryModelClass,
      payload.data.children[0].data,
      id,
      requestType
    );
  }
}
