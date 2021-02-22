{
    "requesteruserid": null, // ignore this
    "requesterusername": null, // ignore this
    "responseobjects": [
        {
            "posts": [
                {
                	// this is the unique post identifier
                    "id": "0d865818-a8ee-4151-9093-96c0a97aa63d",

                    "userid": "6c007289-518a-11eb-a487-3ca82abc3dd4", // ignore this
                    "iscalendarentry": true, // ignore this

                    // here's the date time.
                    "calendardatetime": "2020-12-04T07:00:00",

                    // you could use this ImageUrl 
                    // In case of multiple images, use the first one from the array 
                    "media": [
                        {
														"mediatype" : 31,
                            "mediaurl": "https://ik.imagekit.io/bj96n986jb/dev/Screenshot_2020-12-05_at_12.00.43_AM_3XTnZB8Hr.png", //image url to be displayed
                            "updatedontimestamp": "2020-08-09T21:37:54.5535126Z"
                        }
                    ],
                    // Rating is the star rating - from 1 to 5
                    "rating": 5,

                    // Description for the expanded view
                    "text": "Hi, I'm Kevin Parker, and I run Tame Impala. Some of our good songs that you could check out would be The less I know the better, Let it happen, New person - same old mistake, Guilty conscience, Love/Paranoia, etc. ",

                    "privacy": 18,  // ignore this

                    // TypeOfDay is an array of legend properties. Can vary from 0-5 properties.
					// Legend codes to show in tiles are given at the bottom.
                    "typeofday": [
                        "protein treatment",
                        "deep conditioning"
                    ],
                    "updatedontimestamp": "2020-12-04T18:31:47.261956"	// ignore this
                },
                {
                ...post 2...
                },
                {
                ...post 3...
                }
            ],
            // You could pass along the ContinuationToken below in your next request to fetch subsequent posts. 
            "continuationtoken": {
                "sorton": "calendardatetime",
                "token": "07-09-2020 07:00:00"
            }
        }
    ]
}
```
