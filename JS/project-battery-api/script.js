const batteryLevel = document.querySelector(".batteryLevel")
const batteryCharging = document.querySelector(".batteryCharging")
const batteryChargingTime = document.querySelector(".batteryChargingTime")
const batteryDischargingTime = document.querySelector(".batteryDischargingTime")

// Battery API

const battery = () => {
    if ("getBattery" in navigator) {
        navigator.getBattery().then(battery => {
            function updateAllBatteryDetails() {
                updateChargingInfo()
                updateLevelChange()
                updateDischargingTimeInfo()
                updateChargingTimeChangeInfo()
            }
            updateAllBatteryDetails()
            // Battery charging change
            battery.addEventListener("chargingchange", () => {
                updateChargingInfo()
            })
            function updateChargingInfo() {
                const isCharging = battery.charging ? "Yes" : "No"
                batteryCharging.innerHTML = isCharging
            }

            // Battery charging Time
            battery.addEventListener("chargingtimechange", () => {
                updateChargingTimeChangeInfo()
            })
            function updateChargingTimeChangeInfo() {
                console.log(battery.chargingTime);
                batteryChargingTime.innerHTML = battery.chargingTime + " seconds"
            }

            // Battery Discharging Time
            battery.addEventListener("dischargingtimechange", () => {
                updateDischargingTimeInfo()
            })
            function updateDischargingTimeInfo() {
                batteryDischargingTime.innerHTML = battery.dischargingTime + " seconds"
            }

            // Battery level change
            battery.addEventListener("levelchange", () => {
                updateLevelChange()
            })

            function updateLevelChange() {
                const level = battery.level * 100 + "%"
                batteryLevel.innerHTML = level
            }
            // Battery status
        })
    }
}

battery()