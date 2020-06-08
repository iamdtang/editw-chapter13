import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';

export default class PostSerializer extends JSONSerializer {
  attrs = {
    authorUsername: 'author',
    subreddit: 'subreddit_id'
  };

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload.data.children,
      id,
      requestType
    );
  }

  normalize(typeClass, hash) {
    return super.normalize(typeClass, hash.data);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
