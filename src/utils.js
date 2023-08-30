const ApiKey =
  "0cKl-CsnY5bVLCGZ9Ej2Lv92wkUfp3JVzkgTsKjh6n5UONR8lsZb8ZGYhhp5WFwt3TDhF_g0WFC2bbJDT4VnXbSz7XNYRZxE51Nwwo3ijfEVJoxLM8tjjVEGkHnnZHYx";

export const SortOptions = {
  BEST_MATCH: "best_match",
  RATING: "rating",
  MOST_REVIEWED: "review_count",
};

class Api {
  constructor(apiKey, baseUrl) {
    this._apiKey = apiKey;
    this._baseUrl = "https://cors-anywhere.herokuapp.com/" + baseUrl;
  }

  async get(endpoint, params = {}, handleResponse) {
    const url = new URL(this._baseUrl + endpoint);
    Object.keys(params).forEach(
      (key) => params[key] && url.searchParams.append(key, params[key])
    );
    const options = {
      headers: {
        Authorization: "Bearer " + this._apiKey,
        accept: "application/json",
      },
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        return handleResponse(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export class YelpAPI extends Api {
  constructor(apiKey) {
    super(ApiKey, "https://api.yelp.com/v3");
  }

  async search(term, location, sorting) {
    const searchEndpoint = "/businesses/search";
    const params = {
      term: term || "",
      location: location || "",
      sort_by: sorting || "",
    };

    return await this.get(searchEndpoint, params, (data) => {
      return data.businesses; // Fixed typo: it should be `businesses`, not `business`
    });
  }
}
