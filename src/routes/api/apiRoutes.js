/* ---------------------------------------------------------------------------------------------- */
/*                                            REQUIRES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Express ------------------------------------------ */
const express = require('express')                              // Express HTTP/S Server

/* ---------------------------------------------------------------------------------------------- */
/*                                         INITIALIZATIONS                                        */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Express ------------------------------------------ */
const router = express.Router()

/* ---------------------------------------------------------------------------------------------- */
/*                                             ROUTES                                             */
/* ---------------------------------------------------------------------------------------------- */
/* --------------------------------------------- API -------------------------------------------- */
// API pages are pages that deal with the internal API used to control essential features of the site
// This can range from authentication to data management to data reporting.
// These paths typically start with /api/v<VERSION_NUMBER>/~

// SPEC: V1 API
// UPDATED: 2020 07 02
router.use('/v1', require('./v1/API1Routes'))                       // V1 Spec API


/* ---------------------------------------------------------------------------------------------- */
/*                                             EXPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
module.exports = router