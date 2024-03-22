import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://daumokuqqqaggcrirxyz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhdW1va3VxcXFhZ2djcmlyeHl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNDI5OTgsImV4cCI6MjAyNjcxODk5OH0.uHKRUaU_mJYec3sXOVK7Z0jT3LlKWsHzHD6yehJ-_wk'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getNotes() {
    
  // SELECT * FROM notes
    let { data, error } = await supabase
      .from('notes')
      .select('')
      return { data, error }
}

async function getNote(id) {
    
  // SELECT * FROM notes WHERE id = 4
  let { data, error } = await supabase
  .from('notes')
  .select()
  .eq('id', id)
  return { data, error }
}

async function addNote(info) {

  const { data, error } = await supabase
  .from('notes')
  .insert(info)
  .select()
  return { data, error }
}



export { getNotes, getNote, addNote }
