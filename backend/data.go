package main

// Data structures

type Law struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Category    string `json:"category"`
}

type CaseStudy struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Image       string   `json:"image"`
	Tags        []string `json:"tags"`
	Duration    string   `json:"duration"`
	Tools       int      `json:"tools"`
	Videos      int      `json:"videos"`
}

type Resource struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Category    string `json:"category"`
	Size        string `json:"size"`
	Downloads   int    `json:"downloads"`
}

type LinkItem struct {
	Title string `json:"title"`
	Link  string `json:"link"`
}

type ResourceCategory struct {
	Title       string `json:"title"`
	Icon        string `json:"icon"`
	Description string `json:"description"`
}

type Challenge struct {
	Title      string `json:"title"`
	Category   string `json:"category"`
	Image      string `json:"image"`
	Points     int    `json:"points"`
	Progress   int    `json:"progress"`
	Difficulty string `json:"difficulty"`
}

type LeaderboardEntry struct {
	Name   string `json:"name"`
	Points int    `json:"points"`
}

type Activity struct {
	Description string `json:"description"`
	Time        string `json:"time"`
}

type UserProfile struct {
	Name             string             `json:"name"`
	Title            string             `json:"title"`
	Stats            UserStats          `json:"stats"`
	LearningProgress LearningProgress   `json:"learningProgress"`
	SkillsAssessment []SkillAssessment  `json:"skillsAssessment"`
	RecentActivity   []Activity         `json:"recentActivity"`
	Achievements     []Achievement      `json:"achievements"`
	QuickStats       QuickStats         `json:"quickStats"`
}

type UserStats struct {
	Level     int `json:"level"`
	XP        int `json:"xp"`
	Completed int `json:"completed"`
	Streak    int `json:"streak"`
}

type LearningProgress struct {
	Overall int            `json:"overall"`
	Skills  []LearningSkill `json:"skills"`
}

type LearningSkill struct {
	Name     string `json:"name"`
	Progress int    `json:"progress"`
	Variant  string `json:"variant"`
}

type SkillAssessment struct {
	Skill    string `json:"skill"`
	Type     string `json:"type"`
	Progress int    `json:"progress"`
}

type Achievement struct {
	Title string `json:"title"`
	Icon  string `json:"icon"`
}

type QuickStats struct {
	MemberSince         string `json:"memberSince"`
	TimeSpent           string `json:"timeSpent"`
	ResourcesDownloaded int    `json:"resourcesDownloaded"`
	CommunityRank       string `json:"communityRank"`
}

type ContactInfo struct {
	Icon  string `json:"icon"` // We'll just pass the name, frontend will render the icon
	Value string `json:"value"`
	Href  string `json:"href"`
}

type OfficeHour struct {
	Days  string `json:"days"`
	Hours string `json:"hours"`
}

type TeamMember struct {
	Name  string `json:"name"`
	Title string `json:"title"`
}

// Data Initialization
var placeholderImage = "/assets/images/hero-bg.png"

var lawsData = []Law{
	{"Digital Evidence Standards", "Guidelines for identifying, preserving, and presenting digital evidence.", placeholderImage, "Federal"},
	{"Privacy & Data Protection", "Legal frameworks protecting data handling and privacy rights.", placeholderImage, "International"},
	{"TOP 10 OWAPS", "Understand what is OWAPS and how it was made for the cyber personnels, what are its modern value ", placeholderImage, "International"},
	{"Cybercrime Legislation", "Laws prohibiting computer-based crimes and digital fraud.", placeholderImage, "Federal"},
	{"Chain of Custody", "Legal requirements for evidence handling and documentation.", placeholderImage, "Procedural"},
}

var caseStudiesData = []CaseStudy{
	{"Corporate Data Breach Investigation", "Investigation of a sophisticated APT attack on a Fortune 500 company.", placeholderImage, []string{"Network Security", "Advanced"}, "2 weeks", 4, 8},
    {"AWS IAM Investigation", "Investigation of a cloud based attack on a Fortune 500 company.", placeholderImage, []string{"Network Security", "Advanced"}, "3 weeks", 6, 12},
	{"Mobile Device Financial Fraud", "Recovery of deleted financial records from an Android device.", placeholderImage, []string{"Mobile Forensics", "Intermediate"}, "2 weeks", 3, 15},
	{"Email Phishing Campaign Analysis", "Traced the source of a targeted phishing campaign.", placeholderImage, []string{"Email Forensics", "Beginner"}, "1 week", 8, 0},
}

var resourcesData = []Resource{
    {"Digital Forensics Fundamentals", "Comprehensive introduction to digital forensics principles and practices.", placeholderImage, "Guides", "2.5 MB", 1200},
    {"Network Analysis Toolkit", "Professional-grade network packet analysis and investigation tools.", placeholderImage, "Tools", "15 MB", 850},
    {"Mobile Forensics Video Course", "In-depth video tutorials on mobile device data extraction and analysis.", placeholderImage, "Videos", "1.2 GB", 2300},
    {"Legal Documentation Templates", "Court-ready templates for evidence reports and instance.", placeholderImage, "Templates", "500 KB", 3200},
    {"Malware Analysis Handbook", "Advanced techniques for reverse-engineering and malware analysis.", placeholderImage, "Guides", "4.8 MB", 950},
    {"Cloud Forensics Checklist", "Step-by-step checklist for investigating cloud-based incidents.", placeholderImage, "Templates", "150 KB", 1800},
}

var certificationResources = []LinkItem{
    {Title: "GCFE Study Guide", Link: "#"},
    {Title: "CCE Practice Exams", Link: "#"},
    {Title: "CISSP Security Assessment", Link: "#"},
}

var industryStandards = []LinkItem{
    {Title: "ISO 27037 Guidelines", Link: "#"},
    {Title: "NIST Cybersecurity Framework", Link: "#"},
    {Title: "RFC 3227 Evidence Guidelines", Link: "#"},
}

var resourceCategories = []ResourceCategory{
    {Title: "Beginner Guides", Icon: "Book", Description: "Step-by-step tutorials for newcomers to digital forensics."},
    {Title: "Professional Tools", Icon: "Tools", Description: "Software and utilities for forensic analysis and investigation."},
    {Title: "Video Tutorials", Icon: "Film", Description: "Visual deep-dives into complex topics and tool usage."},
    {Title: "Documentation", Icon: "FileEarmarkText", Description: "Templates, checklists, and standards for reporting."},
}

var challengesData = []Challenge{
    {"Network Traffic Analysis", "Network", placeholderImage, 100, 75, "Intermediate"},
    {"Mobile Device Forensics", "Mobile", placeholderImage, 250, 45, "Intermediate"},
    {"Email Header Analysis", "Email", placeholderImage, 400, 10, "Advanced"},
    {"Malware Detection", "Malware", placeholderImage, 600, 0, "Expert"},
}

var leaderboardData = []LeaderboardEntry{
    {Name: "Alex Chen", Points: 2450},
    {Name: "Sarah Kim", Points: 2375},
    {Name: "Mike Johnson", Points: 2100},
    {Name: "Emma Davis", Points: 2050},
}

var recentActivityData = []Activity{
    {Description: "Completed \"Network Analysis\" challenge", Time: "1 hour ago"},
    {Description: "Started \"Mobile Forensics\" challenge", Time: "3 hours ago"},
    {Description: "Achieved \"Streak Master\" badge", Time: "1 day ago"},
}

var userProfileData = UserProfile{
    Name:  "Alex Johnson",
    Title: "Digital Forensics Analyst",
    Stats: UserStats{Level: 12, XP: 1250, Completed: 23, Streak: 7},
    LearningProgress: LearningProgress{
        Overall: 62,
        Skills: []LearningSkill{
            {Name: "Network Forensics", Progress: 85, Variant: "primary"},
            {Name: "Mobile Analysis", Progress: 72, Variant: "info"},
            {Name: "Legal Compliance", Progress: 90, Variant: "success"},
            {Name: "Malware Analysis", Progress: 45, Variant: "warning"},
        },
    },
    SkillsAssessment: []SkillAssessment{
        {Skill: "Network Forensics", Type: "Technical", Progress: 85},
        {Skill: "Mobile Analysis", Type: "Technical", Progress: 72},
        {Skill: "Legal Compliance", Type: "Legal", Progress: 90},
        {Skill: "Evidence Documentation", Type: "Legal", Progress: 95},
        {Skill: "Malware Analysis", Type: "Technical", Progress: 45},
        {Skill: "Cloud Forensics", Type: "Technical", Progress: 60},
    },
    RecentActivity: []Activity{
        {Description: "Network Traffic Analysis", Time: "2 hours ago"},
        {Description: "Downloaded Mobile Forensics Guide", Time: "1 day ago"},
        {Description: "Earned Network Expert badge", Time: "3 days ago"},
        {Description: "Viewed Corporate Breach Case", Time: "5 days ago"},
    },
    Achievements: []Achievement{
        {Title: "First Case Solved", Icon: "CheckCircleFill"},
        {Title: "Network Expert", Icon: "ShieldCheck"},
        {Title: "Mobile Master", Icon: "PhoneFill"},
        {Title: "Streak Champion", Icon: "TrophyFill"},
    },
    QuickStats: QuickStats{
        MemberSince:         "Jan 2024",
        TimeSpent:           "124 hours",
        ResourcesDownloaded: 47,
        CommunityRank:       "#142",
    },
}

var contactInfo = []ContactInfo{
	{Icon: "EnvelopeFill", Value: "contact@forensichub.com", Href: "mailto:contact@forensichub.com"},
	{Icon: "TelephoneFill", Value: "+1 (555) 123-4567", Href: "tel:+15551234567"},
	{Icon: "GeoAltFill", Value: "123 Cyber Security Blvd, San Francisco, CA 94103", Href: "#"},
}

var officeHours = []OfficeHour{
	{Days: "Monday - Friday", Hours: "9:00 AM - 5:00 PM PST"},
	{Days: "Saturday - Sunday", Hours: "10:00 AM - 4:00 PM PST"},
}

var teamMembers = []TeamMember{
	{Name: "Dr. Sarah Chen", Title: "Lead Forensic Analyst"},
	{Name: "Mike Rodriguez", Title: "Network Specialist"},
	{Name: "Alex Kim", Title: "Mobile Forensics Expert"},
	{Name: "Emma Davis", Title: "Legal Counsel"},
	{Name: "Dr. James Wilson", Title: "Malware Researcher"},
	{Name: "Lisa Thompson", Title: "Community Manager"},
}