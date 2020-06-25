import RESTAdapter from '@ember-data/adapter/rest';

export default class PostAdapter extends RESTAdapter {
  // host = 'https://www.reddit.com';
  host = '';
  namespace = 'r';

  urlForQuery(query, modelName) {
    let { subreddit } = query;
    delete query.subreddit;
    return `${this.host}/${this.namespace}/${subreddit}.json`;
  }
}
