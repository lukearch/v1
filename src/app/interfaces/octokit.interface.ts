import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit();

export type Repo = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.get
>;

export type Repos = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForAuthenticatedUser
>;
