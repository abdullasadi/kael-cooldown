local QBCore = exports[Config.Core]:GetCoreObject()
local Cooldown = false

CreateThread(function()
    while true do 
        if Cooldown and Config.CurrentCooldown > 0 then 
            Config.CurrentCooldown = Config.CurrentCooldown - 1
        end
        Wait(1000)
    end      
end)

QBCore.Functions.CreateCallback("kael-cooldown:server:getconfig", function(source, cb)
    cb(Config)
end)

RegisterNetEvent("kael-cooldown:server:setprio", function(ptype)
    Config.CurrentType = ptype
    if ptype == "cooldown" then 
        Cooldown = true
        Config.CurrentCooldown = Config.DefaultCooldown * 60
    else
        Cooldown = false
        Config.CurrentCooldown = 0
    end
    TriggerClientEvent("kael-cooldown:client:updateconfig", -1, Config)
end)
