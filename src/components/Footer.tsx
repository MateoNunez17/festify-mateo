const newDate = new Date();
export default function Footer() {
    
    return (
    <footer className="border-t mt-auto">
    <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-neutral-600 text-center">&copy; {newDate.getFullYear()} 
  FestivalHub 2025</div>
    </footer>
    );
}