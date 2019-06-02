import { income } from "@resolvers/income";
import { IResolverObject, IResolverOptions, IEnumResolver } from "graphql-tools";
import { GraphQLScalarType } from "graphql";

export interface IResolver {
	[type: string]:
		| (() => any)
		| IResolverObject<any, any>
		| IResolverOptions<any, any>
		| GraphQLScalarType
		| IEnumResolver;
}

export const resolvers = { ...income };
