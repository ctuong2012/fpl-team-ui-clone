import TeamView from './components/TeamView';
import teamData from './data/sampleTeam.json';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-700 text-white p-4 text-center text-2xl font-bold shadow-md">
        FPL Team UI Clone - Gameweek 25
      </header>
      <main className="flex justify-center items-center py-8">
        <TeamView team={teamData} />
      </main>
    </div>
  );
}
export default App;