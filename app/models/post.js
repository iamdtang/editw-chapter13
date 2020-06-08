import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('number') score;
  @attr('string') title;
  @attr('string') authorUsername;
  @attr('boolean') isOriginalContent;
}
