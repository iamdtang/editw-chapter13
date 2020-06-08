import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('number') score;
  @attr('string') title;
  @attr('string') url;
  @attr('string') authorUsername;
  @attr('boolean') isOriginalContent;
  @belongsTo('subreddit', { async: true }) subreddit;
}
