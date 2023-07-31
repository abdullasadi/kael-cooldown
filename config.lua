Config = {
    Core = 'qb-core',
}



-- Don't Touch This --
Config.DefaultCooldown = 30 -- 30 mins
Config.CurrentCooldown = 0
Config.CurrentType = false
Config.Types = {
    ["cooldown"] = { label = "CoolDown" },
    ["honhold"] = { label = "On Hold" },
    ["inprogress"] = { label = "In Progress" },
    ["meeting"] = { label = "Police Meeting" },
    ["safe"] = { label = "City Safe" },
    ["inactive"] = { label = "Inactive" },
}