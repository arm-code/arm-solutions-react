import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { logEntrySchema } from '@/lib/schemas'; // Importa el esquema de Zod
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Si tienes el componente Textarea de Shadcn
import { toast } from 'sonner';


const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/\s+/g, '-')            // Espacios por guiones
    .replace(/[^\w-]+/g, '');        // Elimina caracteres especiales
};

const NewLog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Estados del formulario
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Frontend' | 'Backend' | 'DevOps' | 'Database'>('Backend');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const rawData = {
      title,
      category,
      content,
      slug: createSlug(title),
      tags: [] 
    };

    // Capa de Validación con Zod
    const result = logEntrySchema.safeParse(rawData);

    if (!result.success) {
      const errorMsg = result.error.message;
      toast.error(`Error de validación: ${errorMsg}`);
      setLoading(false);
      return;
    }

    // Capa de Persistencia (Supabase)
    const { error } = await supabase
      .from('log_entries')
      .insert([result.data]);

    if (error) {
      toast.error(`Error de base de datos: ${error.message}`);
      setLoading(false);
    } else {
      toast.success("¡Entrada publicada con éxito!");
      navigate('/log'); // Redirigimos a la lista para ver el resultado
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <header className="mb-10 space-y-2">
        <h1 className="text-3xl font-black tracking-tighter uppercase italic">Nuevo Registro Técnico</h1>
        <p className="text-sm text-muted-foreground font-mono">Documentando soluciones v0.1.0</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-violet-600">Título del Problema</label>
          <Input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Error de hidratación en Next.js"
            className="border-2 focus:ring-violet-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-violet-600">Categoría</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="DevOps">DevOps</option>
            <option value="Database">Database</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-violet-600">Contenido (Markdown)</label>
          <Textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Diagnóstico, causa raíz y solución..."
            className="min-h-[300px] font-mono text-sm leading-relaxed"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-violet-600 hover:bg-violet-700 font-bold uppercase tracking-[0.2em] py-6"
          disabled={loading}
        >
          {loading ? 'Sincronizando con Supabase...' : 'Publicar en la Bitácora'}
        </Button>
      </form>
    </div>
  );
};

export default NewLog;