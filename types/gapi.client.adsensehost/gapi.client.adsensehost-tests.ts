/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('adsensehost', 'v4.1', () => {
        /** now we can use gapi.client.adsensehost */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your AdSense host data and associated accounts */
            'https://www.googleapis.com/auth/adsensehost',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Get information about the selected associated AdSense account. */
        await gapi.client.accounts.get({
            accountId: "accountId",
        });
        /** List hosted accounts associated with this AdSense account by ad client id. */
        await gapi.client.accounts.list({
            filterAdClientId: "filterAdClientId",
        });
        /** Get information about one of the ad clients in the Host AdSense account. */
        await gapi.client.adclients.get({
            adClientId: "adClientId",
        });
        /** List all host ad clients in this AdSense account. */
        await gapi.client.adclients.list({
            maxResults: 1,
            pageToken: "pageToken",
        });
        /** Create an association session for initiating an association with an AdSense user. */
        await gapi.client.associationsessions.start({
            productCode: "productCode",
            userLocale: "userLocale",
            websiteLocale: "websiteLocale",
            websiteUrl: "websiteUrl",
        });
        /** Verify an association session after the association callback returns from AdSense signup. */
        await gapi.client.associationsessions.verify({
            token: "token",
        });
        /** Delete a specific custom channel from the host AdSense account. */
        await gapi.client.customchannels.delete({
            adClientId: "adClientId",
            customChannelId: "customChannelId",
        });
        /** Get a specific custom channel from the host AdSense account. */
        await gapi.client.customchannels.get({
            adClientId: "adClientId",
            customChannelId: "customChannelId",
        });
        /** Add a new custom channel to the host AdSense account. */
        await gapi.client.customchannels.insert({
            adClientId: "adClientId",
        });
        /** List all host custom channels in this AdSense account. */
        await gapi.client.customchannels.list({
            adClientId: "adClientId",
            maxResults: 2,
            pageToken: "pageToken",
        });
        /** Update a custom channel in the host AdSense account. This method supports patch semantics. */
        await gapi.client.customchannels.patch({
            adClientId: "adClientId",
            customChannelId: "customChannelId",
        });
        /** Update a custom channel in the host AdSense account. */
        await gapi.client.customchannels.update({
            adClientId: "adClientId",
        });
        /**
         * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format
         * specify "alt=csv" as a query parameter.
         */
        await gapi.client.reports.generate({
            dimension: "dimension",
            endDate: "endDate",
            filter: "filter",
            locale: "locale",
            maxResults: 5,
            metric: "metric",
            sort: "sort",
            startDate: "startDate",
            startIndex: 9,
        });
        /** Delete a URL channel from the host AdSense account. */
        await gapi.client.urlchannels.delete({
            adClientId: "adClientId",
            urlChannelId: "urlChannelId",
        });
        /** Add a new URL channel to the host AdSense account. */
        await gapi.client.urlchannels.insert({
            adClientId: "adClientId",
        });
        /** List all host URL channels in the host AdSense account. */
        await gapi.client.urlchannels.list({
            adClientId: "adClientId",
            maxResults: 2,
            pageToken: "pageToken",
        });
    }
});
