import * as constants from "../constants/EntityConstants";

export const fetchEntity = (
  entityName,
  queryParam,
  overWriteEntityName,
  payload
) => ({
  type: constants.FETCH_ENTITY,
  entityName,
  queryParam,
  overWriteEntityName,
  payload,
});

export const fetchEntityFullfiled = (response) => {
  return {
    type: constants.FETCH_ENTITY_FULFILLED,
    response: response.data,
    entityName: response.entityName,
  };
};

export const fetchEntityFailed = (entityName) => ({
  type: constants.FETCH_ENTITY_FAILED,
  entityName,
});

export const addEntity = (jsonBody, entityName) => ({
  type: constants.ADD_ENTITY,
  jsonBody,
  entityName,
});

export const addEntityFullfiled = (entityName) => ({
  type: constants.ADD_ENTITY_FULFILLED,
  entityName,
});

export const addEntityFailed = (entityName) => ({
  type: constants.ADD_ENTITY_FAILED,
  entityName,
});

export const deleteEntity = (entityId, entityName) => ({
  type: constants.DELETE_ENTITY,
  entityId,
  entityName,
});

export const deleteEntityFullfiled = (entityName) => ({
  type: constants.DELETE_ENTITY_FULFILLED,
  entityName,
});

export const deleteEntityFailed = (entityName) => ({
  type: constants.DELETE_ENTITY_FAILED,
  entityName,
});
