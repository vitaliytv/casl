import { PureAbility, AbilityOptions } from './PureAbility';
import { Abilities } from './types';
import { MongoQuery, mongoQueryMatcher } from './matchers/conditions';
import { RawRuleFrom } from './RawRule';
import { fieldPatternMatcher } from './matchers/field';

export class Ability<
  A extends Abilities = Abilities,
  C extends MongoQuery<any> = MongoQuery
> extends PureAbility<A, C> {
  constructor(rules?: RawRuleFrom<A, C>[], options?: AbilityOptions<A, C>) {
    super(rules, {
      conditionsMatcher: mongoQueryMatcher,
      fieldMatcher: fieldPatternMatcher,
      ...options,
    });
  }
}

export type AnyMongoAbility = Ability<any, MongoQuery>;
