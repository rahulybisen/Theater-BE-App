// import { atob } from 'atob';
// import { PrismaClient } from '@prisma/client'
// var verifier = require('google-id-token-verifier');
// var Q = require('q');

// export interface Context {
// 	prisma: PrismaClient,
// 	Role: any,
// 	request: any
// }

// export function getUserId(ctx: Context) {
// 	const Authorization = ctx.request.get('Authorization');
// 	if (Authorization) {
// 		var userId;
// 		const token = Authorization.replace('Bearer ', '');
// 		const tokenJsonObj = parseJwt(token);
// 		if (tokenJsonObj.claims != null) {
// 			userId = tokenJsonObj.claims.userId;
// 		}
// 		return userId;
// 	}
// 	throw new AuthError();
// }

// export function getUserToken(ctx: Context) {
// 	const Authorization = ctx.request.get('Authorization');
// 	if (Authorization) {
// 		return Authorization.replace('Bearer ', '');
// 	}
// 	return null;
// }

// export function getUserOrganization(ctx: Context) {
// 	const Authorization = ctx.request.get('Authorization');
// 	if (Authorization) {
// 		const token = Authorization.replace('Bearer ', '');
// 		const tokenJsonObj = parseJwt(token);
// 		if (tokenJsonObj.claims != null) {
// 			return {
// 				loggedInUserId: tokenJsonObj.claims.userId,
// 				loggedInOrganizationId: tokenJsonObj.claims.organizationId
// 			};
// 		}
// 	}
// 	return {};
// }

// export function getUser(request: any) {
// 	const Authorization = request.get('Authorization');
// 	if (Authorization) {
// 		const token = Authorization.replace('Bearer ', '');
// 		const tokenJsonObj = parseJwt(token);
// 		if (tokenJsonObj.claims != null) {
// 			return {
// 				loggedInUserId: tokenJsonObj.claims.userId,
// 				loggedInOrganizationId: tokenJsonObj.claims.organizationId
// 			};
// 		}
// 		return {};
// 	}

// 	throw new AuthError();
// }

// export class AuthError extends Error {
// 	constructor() {
// 		super('Not authorized');
// 	}
// }

// export function parseJwt(token: string) {
// 	const base64Url = token.split('.')[1];
// 	const base64 = base64Url.replace('-', '+').replace('_', '/');
// 	return JSON.parse(atob(base64));
// }

// function ValidateTokenLiftime(issuedTime) {
// 	var expiryTime = new Date(issuedTime * 1000);
// 	var currentTime = new Date();
// 	expiryTime.setHours(expiryTime.getHours() + 2);
// 	if (currentTime > expiryTime) {
// 		return false
// 	}
// 	return true;
// }

// export function nasGQLClientForToken(): any {
// 	let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTYxNTI4NTkwNSwiZXhwIjoxNjE1Mjg5NTA1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1oY3R0bUBzZW1hbm9vcnBsdXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1oY3R0bUBzZW1hbm9vcnBsdXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJjamtnemF2YXUwMDR6MGIxNzBjNjdhd3loIiwiY2xhaW1zIjp7InVzZXJJZCI6ImNqa2d6YXZhdTAwNHowYjE3MGM2N2F3eWgiLCJvcmdhbml6YXRpb25JZCI6IiIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInJvbGUiOlsiU1VQRVJBRE1JTiJdfX0.TJvN56cXpv7B5J4ZyrFgkrzihJM - U_gbqqux0GW88ZWWsFTKSrF9x4Iz0BUoUJyTW6DTvJtZ0Z - dIZCTXyMMGzIEbbZYBg4gj7jXkOLc5mX8Mw00gxJvubEt32g3JginIFdiftANyqWPkzj5s4BUt169TrbLpxUCPlTRdtbH6FA19ZNEA6uvk74gBI7ZfB566mtUpIyc83FhLD6RyKHMf1s6QxFxScjnfhAHtsHEjWWjFjoUqzBuGCM0yKDioz5Y_Iaxl3rEeQY8ySHxeDjsj8bwDXVUJmB5KidwvKESKFhQGKAZ2uGyrzVsw4IDSxUeYe_Xq8YKSJkqu_0LPMo2iA"
// 	var client = require("graphql-client")({
// 		url: process.env.NAS_DOMAIN,
// 		headers: {
// 			Authorization: "Bearer " + token
// 		}
// 	});
// 	return client;
// }

// export async function getQueryRes(gqlQuery) {
// 	const result = nasGQLClientForToken()
// 		.query(gqlQuery, {}, function (request, res) {
// 			if (res.status === 401) {
// 				throw new Error("Not authorized");
// 			}
// 		})
// 		.then(function (body) {
// 			if (body.errors) {
// 				if (body.errors[0].message) {
// 					throw new Error(body.errors[0].message);
// 				}
// 			}
// 			return body.data;
// 		})
// 		.catch(function (err) {
// 			throw new Error("Failed to get data from NAS");
// 		});
// 	return result;
// };

// export function ValidateToken(token: string, clinet: string): any {
// 	var deferred = Q.defer();
// 	var IdToken = token;
// 	var gKey;

// 	if (clinet == "IOS") {
// 		gKey = process.env.IOSCLIENTID;
// 	} else if (clinet == "ANDROID") {
// 		gKey = process.env.ANDROIDCLIENTID;
// 	} else if (clinet == "WEB") {
// 		gKey = process.env.WEBCLIENT;
// 	}

// 	verifier.verify(IdToken, gKey, function (err, tokenInfo) {
// 		if (!err) {
// 			deferred.resolve(tokenInfo);
// 		} else {
// 			deferred.reject(new Error(err));
// 		}
// 	});

// 	return deferred.promise;
// }

// export async function ValidateAppleToken(token: string, isWindow = false) {
// 	try {
// 		var deferred = Q.defer();
// 		var IdToken = token;
// 		const axios = require('axios').default;
// 		const jose = require('jose')
// 		const { eXaunmL, JWKS, JWT, errors } = jose
// 		axios.get(process.env.APPLEKEYURL)
// 			.then(function (response) {
// 				const key = jose.JWKS.asKeyStore(response.data);
// 				const verified = jose.JWT.verify(IdToken, key);
// 				deferred.resolve(verified)
// 			})
// 			.catch(function (error) {
// 				console.log(error);
// 				return deferred.resolve(undefined)
// 			});

// 		return deferred.promise;
// 	} catch (error) {
// 		console.log("error")
// 		console.log(error)
// 		throw error
// 	}
// }

// export async function getDatesBetweenDates(startDate: string, endDate: string) {
// 	try {
// 		let dates = []
// 		//to avoid modifying the original date
// 		const theDate = new Date(startDate)
// 		while (theDate < new Date(endDate)) {
// 			dates = [...dates, new Date(theDate).getFullYear() + "-" + ((new Date(theDate).getMonth() + 1) < 10 ? '0' : '') + (new Date(theDate).getMonth() + 1) + '-' + (new Date(theDate).getDate() < 10 ? '0' : '') + new Date(theDate).getDate()]
// 			theDate.setDate(theDate.getDate() + 1)
// 		}
// 		return dates;
// 	} catch (error) {
// 		console.log(error)
// 		throw error
// 	}
// }

// export async function getDate(newDate: string) {
// 	try {
// 		return new Date(newDate).getFullYear() + "-" + ((new Date(newDate).getMonth() + 1) < 10 ? '0' : '') + (new Date(newDate).getMonth() + 1) + '-' + (new Date(newDate).getDate() < 10 ? '0' : '') + new Date(newDate).getDate()
// 	} catch (error) {
// 		console.log(error)
// 		throw error
// 	}
// }