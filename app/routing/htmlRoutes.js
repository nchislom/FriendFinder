// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../survey.html"));
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
});