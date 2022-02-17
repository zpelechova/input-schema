import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    let scrapeReviewerName = false;
    let scrapeReviewerId = false;
    let scrapeReviewerUrl = false;
    let scrapeReviewId = false;
    let scrapeReviewUrl = false;
    let scrapeResponseFromOwnerText = false;

    const personalData = input.personalData;

    if (personalData) {
        scrapeReviewerName = true;
        scrapeReviewerId = true;
        scrapeReviewerUrl = true;
        scrapeReviewId = true;
        scrapeReviewUrl = true;
        scrapeResponseFromOwnerText = true;
    }
    const proxyConfig = { useApifyProxy: true };

    await Apify.metamorph('drobnikj/crawler-google-places', {
        ...input,
        proxyConfig: {
            useApifyProxy: true
        },
        scrapeReviewerName,
        scrapeReviewerId,
        scrapeReviewerUrl,
        scrapeReviewId,
        scrapeReviewUrl,
        scrapeResponseFromOwnerText
    });
});
