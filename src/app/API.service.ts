/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateHeartRateInput = {
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type UpdateHeartRateInput = {
  id: string;
  heartRate?: number | null;
  appTimeStamp: string;
};

export type DeleteHeartRateInput = {
  id: string;
  appTimeStamp: string;
};

export type CreatePatientInput = {
  id?: string | null;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId?: string | null;
  isActive: boolean;
  remarks?: string | null;
};

export type UpdatePatientInput = {
  id: string;
  lastName?: string | null;
  givenNames?: string | null;
  email?: string | null;
  mobile?: string | null;
  dateOfBirth?: string | null;
  deviceId?: string | null;
  isActive?: boolean | null;
  remarks?: string | null;
};

export type DeletePatientInput = {
  id?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelHeartRateFilterInput = {
  id?: ModelIDFilterInput | null;
  heartRate?: ModelIntFilterInput | null;
  appTimeStamp?: ModelStringFilterInput | null;
  and?: Array<ModelHeartRateFilterInput | null> | null;
  or?: Array<ModelHeartRateFilterInput | null> | null;
  not?: ModelHeartRateFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelPatientFilterInput = {
  id?: ModelIDFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  givenNames?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  mobile?: ModelStringFilterInput | null;
  dateOfBirth?: ModelStringFilterInput | null;
  deviceId?: ModelStringFilterInput | null;
  isActive?: ModelBooleanFilterInput | null;
  remarks?: ModelStringFilterInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateHeartRateMutation = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type UpdateHeartRateMutation = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type DeleteHeartRateMutation = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

export type GetHeartRateQuery = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type ListHeartRatesQuery = {
  __typename: "ModelHeartRateConnection";
  items: Array<{
    __typename: "HeartRate";
    id: string;
    heartRate: number;
    appTimeStamp: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    lastName: string;
    givenNames: string;
    email: string;
    mobile: string;
    dateOfBirth: string;
    deviceId: string | null;
    isActive: boolean;
    remarks: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateHeartRateSubscription = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type OnUpdateHeartRateSubscription = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type OnDeleteHeartRateSubscription = {
  __typename: "HeartRate";
  id: string;
  heartRate: number;
  appTimeStamp: string;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  lastName: string;
  givenNames: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  deviceId: string | null;
  isActive: boolean;
  remarks: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHeartRate(
    input: CreateHeartRateInput
  ): Promise<CreateHeartRateMutation> {
    const statement = `mutation CreateHeartRate($input: CreateHeartRateInput!) {
        createHeartRate(input: $input) {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHeartRateMutation>response.data.createHeartRate;
  }
  async UpdateHeartRate(
    input: UpdateHeartRateInput
  ): Promise<UpdateHeartRateMutation> {
    const statement = `mutation UpdateHeartRate($input: UpdateHeartRateInput!) {
        updateHeartRate(input: $input) {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHeartRateMutation>response.data.updateHeartRate;
  }
  async DeleteHeartRate(
    input: DeleteHeartRateInput
  ): Promise<DeleteHeartRateMutation> {
    const statement = `mutation DeleteHeartRate($input: DeleteHeartRateInput!) {
        deleteHeartRate(input: $input) {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHeartRateMutation>response.data.deleteHeartRate;
  }
  async CreatePatient(
    input: CreatePatientInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!) {
        createPatient(input: $input) {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!) {
        updatePatient(input: $input) {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!) {
        deletePatient(input: $input) {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async GetHeartRate(
    id: string,
    appTimeStamp: string
  ): Promise<GetHeartRateQuery> {
    const statement = `query GetHeartRate($id: ID!, $appTimeStamp: AWSDateTime!) {
        getHeartRate(id: $id, appTimeStamp: $appTimeStamp) {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      appTimeStamp
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHeartRateQuery>response.data.getHeartRate;
  }
  async ListHeartRates(
    id?: string,
    appTimeStamp?: ModelStringKeyConditionInput,
    filter?: ModelHeartRateFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListHeartRatesQuery> {
    const statement = `query ListHeartRates($id: ID, $appTimeStamp: ModelStringKeyConditionInput, $filter: ModelHeartRateFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listHeartRates(id: $id, appTimeStamp: $appTimeStamp, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            heartRate
            appTimeStamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (appTimeStamp) {
      gqlAPIServiceArguments.appTimeStamp = appTimeStamp;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHeartRatesQuery>response.data.listHeartRates;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            lastName
            givenNames
            email
            mobile
            dateOfBirth
            deviceId
            isActive
            remarks
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  OnCreateHeartRateListener: Observable<
    OnCreateHeartRateSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHeartRate {
        onCreateHeartRate {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`
    )
  ) as Observable<OnCreateHeartRateSubscription>;

  OnUpdateHeartRateListener: Observable<
    OnUpdateHeartRateSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHeartRate {
        onUpdateHeartRate {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`
    )
  ) as Observable<OnUpdateHeartRateSubscription>;

  OnDeleteHeartRateListener: Observable<
    OnDeleteHeartRateSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHeartRate {
        onDeleteHeartRate {
          __typename
          id
          heartRate
          appTimeStamp
        }
      }`
    )
  ) as Observable<OnDeleteHeartRateSubscription>;

  OnCreatePatientListener: Observable<
    OnCreatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`
    )
  ) as Observable<OnCreatePatientSubscription>;

  OnUpdatePatientListener: Observable<
    OnUpdatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`
    )
  ) as Observable<OnUpdatePatientSubscription>;

  OnDeletePatientListener: Observable<
    OnDeletePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          lastName
          givenNames
          email
          mobile
          dateOfBirth
          deviceId
          isActive
          remarks
        }
      }`
    )
  ) as Observable<OnDeletePatientSubscription>;
}
