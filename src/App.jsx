/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

function App() {
  const clickHandler = () => {
    const url = document.getElementById("urlInput").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    const monday = document.getElementById("Monday").checked;
    const tuesday = document.getElementById("Tuesday").checked;
    const wednesday = document.getElementById("Wednesday").checked;
    const thru = document.getElementById("Thru").checked;
    const friday = document.getElementById("Friday").checked;
    const sat = document.getElementById("Sat").checked;
    const sunday = document.getElementById("Sunday").checked;

    const days = [monday, tuesday, wednesday, thru, friday, sat, sunday];

    if (url && startTime && endTime) {
      chrome.storage.local.get({ blockedSites: [] }, (result) => {
        const blockedSites = result.blockedSites;
        blockedSites.push({ url, startTime, endTime, days });
        chrome.storage.local.set({ blockedSites: blockedSites }, () => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTabId = tabs[0].id;
            chrome.tabs.sendMessage(
              currentTabId,
              { action: "blockSite", url, startTime, endTime, days },
              () => {
                chrome.tabs.reload(currentTabId);
              }
            );
          });
        });
      });
    } else {
      alert("Please enter a URL, start time, and end time.");
    }
  };

  return (
    <div>
      <h1>Welcome to blocking website</h1>
      <input type="text" placeholder="Enter the URL to block" id="urlInput" />
      <input
        type="time"
        placeholder="Enter the start time in (HH:MM)"
        id="startTime"
      />
      <input
        type="time"
        placeholder="Enter the end time in (HH:MM)"
        id="endTime"
      />

      <label htmlFor="Monday">Monday</label>
      <input type="checkbox" name="Monday" id="Monday" />

      <label htmlFor="Tuesday">Tuesday</label>
      <input type="checkbox" name="Tuesday" id="Tuesday" />

      <label htmlFor="Wednesday">Wednesday</label>
      <input type="checkbox" name="Wednesday" id="Wednesday" />

      <label htmlFor="Thru">Thru</label>
      <input type="checkbox" name="Thru" id="Thru" />

      <label htmlFor="Friday">Friday</label>
      <input type="checkbox" name="Friday" id="Friday" />

      <label htmlFor="Sat">Sat</label>
      <input type="checkbox" name="Sat" id="Sat" />

      <label htmlFor="Sunday">Sunday</label>
      <input type="checkbox" name="Sunday" id="Sunday" />

      <button id="submitButton" onClick={clickHandler}>
        Submit
      </button>
    </div>
  );
}
export default App;
