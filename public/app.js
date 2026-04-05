const urlInput = document.querySelector("#urlInput");
const status = document.querySelector("#status");
const archiveForm = document.querySelector("#archiveForm");
const ghostFallbackButton = document.querySelector("#ghostFallback");

const ARCHIVE_IS_PREFIX = "https://archive.is/?run=1&url=";
const GHOST_ARCHIVE_SEARCH_PREFIX = "https://ghostarchive.org/search?term=";

archiveForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const pageUrl = normalizeUrl(urlInput.value);
  if (!pageUrl) {
    setStatus("Enter a valid page URL.");
    return;
  }

  window.open(buildArchiveUrl(ARCHIVE_IS_PREFIX, pageUrl), "_blank", "noopener,noreferrer");
  setStatus("Opening...");
});

ghostFallbackButton.addEventListener("click", (event) => {
  event.preventDefault();

  const pageUrl = normalizeUrl(urlInput.value);
  if (!pageUrl) {
    setStatus("Enter a valid page URL.");
    return;
  }

  window.open(buildArchiveUrl(GHOST_ARCHIVE_SEARCH_PREFIX, pageUrl), "_blank", "noopener,noreferrer");
  setStatus("Opening Ghost Archive...");
});

function buildArchiveUrl(prefix, pageUrl) {
  return `${prefix}${encodeURIComponent(pageUrl)}`;
}

function normalizeUrl(value) {
  const raw = value.trim();
  if (!raw) {
    return "";
  }

  try {
    const url = new URL(raw);
    return url.toString();
  } catch {
    return "";
  }
}

function setStatus(message) {
  status.textContent = message;
}
