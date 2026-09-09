import site from '../../data/site';

const query = encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`);

// Keyless Google Maps embed (the /maps?...&output=embed form needs no API
// key/billing) showing the practice address from data/site.js.
export default function LocationMap() {
  return (
    <div className="overflow-hidden rounded-(--radius-card) border border-border shadow-soft">
      <iframe
        title={`Map to ${site.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="h-[320px] w-full sm:h-[380px] md:h-[420px]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
