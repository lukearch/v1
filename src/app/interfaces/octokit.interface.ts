import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit();

export type Repos = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForAuthenticatedUser
>;

export type User = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.users.getAuthenticated
>;
