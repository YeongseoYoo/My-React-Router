import React, { useEffect, useState } from "react";
import { fetchCampaignList } from "~/lib/apis/wadiz";

export default function CampaignListPage() {
  const [campaignList, setCampaignList] = useState([]);

  useEffect(() => {
    fetchCampaignList().then((data) => {
      setCampaignList(data);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {campaignList.map((campaign) => (
        <div key={campaign._id} className="card" style={{ width: "18rem", margin: "10px", overflow: "hidden" }}>
          <a href={`#`} style={{ textDecoration: "none", color: "inherit" }}>
            <img src={campaign.photoUrl} className="card-img-top" alt={campaign.title} />
            <div className="card-body">
              <h5 className="card-title">{campaign.title}</h5>
              <p className="card-text">{campaign.nickName}</p>
              <p className="card-text">achievementRate: {campaign.achievementRate}%</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}


